package com.psa;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.psa.models.OrderEntity;
import com.psa.models.SymbolEntity;


public class TradingEngine {

    public final Connection db;

    public TradingEngine(Connection db) {
        this.db = db;
    }

    public void scanOrderBook(String symbol) {

        System.out.println("*** Entering scanOrderBook().");

        List<OrderEntity> bids = getInsideOrders(symbol, "B");
        List<OrderEntity> asks = getInsideOrders(symbol, "S");

        try {
            db.setAutoCommit(false);
            while (!bids.isEmpty() && !asks.isEmpty() && bids.get(0).price() >= asks.get(0).price()) {
                OrderEntity buy = bids.get(0);
                OrderEntity sell = asks.get(0);
                int buyQuantityRemaining = buy.quantity() - buy.quantity_filled() - buy.quantity_cancelled();
                int sellQuantityRemaining = sell.quantity() - sell.quantity_filled() - sell.quantity_cancelled();
                int quantity = Math.min(buyQuantityRemaining, sellQuantityRemaining);
                double price = buy.timestamp_epoch_ms() < sell.timestamp_epoch_ms()
                        ? buy.price()
                        : sell.price();
                System.out.println("*** Executing " + quantity + " shares of " + symbol + " at " + price + ".");
                updateOrder(buy, quantity);
                if (buyQuantityRemaining == quantity) {
                    bids.remove(0);
                }
                updateOrder(sell, quantity);
                if (sellQuantityRemaining == quantity) {
                    asks.remove(0);
                }
                createSymbolRecord(symbol, "OPEN");
                updateLastPrice(symbol, price);
                createTradeRecord(buy, sell, quantity, price);
                db.commit();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            System.out.println("*** Completing scanOrderBook().");
            try {
                db.setAutoCommit(true);
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }

    private List<OrderEntity> getInsideOrders(String symbol, String side) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT * FROM public.order WHERE status='OPEN' AND type='LIMIT' AND symbol='");
        sql.append(symbol);
        sql.append("' AND side='");
        sql.append(side);
        sql.append("' ORDER BY price ");
        if (side.equals("B")) {
            sql.append("DESC");
        } else {
            sql.append("ASC");
        }
        sql.append(", timestamp ASC");
        try (Statement stmt = db.createStatement()) {
            ResultSet rs = stmt.executeQuery(sql.toString());
            List<OrderEntity> orders = new ArrayList<>();
            while (rs.next()) {
                orders.add(new OrderEntity(
                        rs.getString("id"),
                        rs.getString("status"),
                        rs.getString("broker"),
                        rs.getString("symbol"),
                        rs.getString("side"),
                        rs.getString("type"),
                        rs.getDouble("price"),
                        rs.getInt("quantity"),
                        rs.getInt("quantity_filled"),
                        rs.getInt("quantity_cancelled"),
                        rs.getTimestamp("timestamp").toInstant().atZone(ZoneId.systemDefault()).toEpochSecond() * 1000
                ));
            }
            return orders;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    private void updateOrder(OrderEntity order, int filled) throws SQLException {
        String sql = "UPDATE public.order SET quantity_filled = quantity_filled + ?, status = ? WHERE id = ?";
        try (PreparedStatement pstmt = db.prepareStatement(sql)) {
            pstmt.setInt(1, filled);
            pstmt.setString(2, (
                    order.quantity_filled() +
                            order.quantity_cancelled() +
                            filled
            ) >= order.quantity() ? "COMPLETE" : order.status());
            pstmt.setString(3, order.id());
            pstmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    private void updateLastPrice(String symbol, double price) throws SQLException {
        // Update the price if the symbol exists, if not - insert a new record
        String sql = "INSERT INTO public.last_price (symbol, price) " +
                "VALUES (?, ?) " +
                "ON CONFLICT (symbol) DO UPDATE " +
                "SET price = EXCLUDED.price";

        try (PreparedStatement pstmt = db.prepareStatement(sql)) {
            pstmt.setString(1, symbol);
            pstmt.setDouble(2, price);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    // Create a symbol record, possibly put in scanOrderBook, where would the status come from?
    private void createSymbolRecord(String symbol, String status) throws SQLException {
        String sql = "INSERT INTO public.symbol (symbol, status) " +
                "VALUES (?, ?) " +
                "ON CONFLICT (symbol) DO NOTHING";
        try (PreparedStatement pstmt = db.prepareStatement(sql)) {
            pstmt.setString(1, symbol);
            pstmt.setString(2, status);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    // Have put the endpoint in ExchangeGrpcImpl, leaving this here for potential later use.
    private void getSymbols() throws SQLException {
        String sql = "SELECT * FROM public.symbol";
        try (PreparedStatement pstmt = db.prepareStatement(sql)) {
            pstmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    // Update symbol status draft, later to put in ExchangeGrpcImpl
    // Since users (buyers and sellers) don't control symbol status, maybe we shouldn't expose this endpoint
    // Or potentially allow usage for 'admin' user
    private void updateSymbolStatus(String symbol, String status) throws SQLException, Exception {
        String selectQuery = "SELECT COUNT(*) FROM symbol WHERE symbol = ?";
        String updateQuery = "UPDATE symbol SET status = ? WHERE symbol = ?";
        try (PreparedStatement selectStmt = db.prepareStatement(selectQuery)) {
            selectStmt.setString(1, symbol);

            try (ResultSet rs = selectStmt.executeQuery()) {
                if (rs.next() && rs.getInt(1) > 0) {
                    // Record exists, perform the update
                    try (PreparedStatement updateStmt = db.prepareStatement(updateQuery)) {
                        updateStmt.setString(1, status);
                        updateStmt.setString(2, symbol);
                        updateStmt.executeUpdate();
                    }
                } else {
                    // Record not found, throw exception
                    throw new Exception("Record with symbol '" + symbol + "' not found.");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


    private void createTradeRecord(OrderEntity buy, OrderEntity sell, int quantity, double price) throws SQLException {
        String sql = "INSERT INTO public.trade (id, symbol, buy_order_id, sell_order_id, buy_broker, sell_broker, quantity, price, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement pstmt = db.prepareStatement(sql)) {
            pstmt.setString(1, 'T' + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
            pstmt.setString(2, buy.symbol());
            pstmt.setString(3, buy.id());
            pstmt.setString(4, sell.id());
            pstmt.setString(5, buy.broker());
            pstmt.setString(6, sell.broker());
            pstmt.setInt(7, quantity);
            pstmt.setDouble(8, price);
            pstmt.setTimestamp(9, Timestamp.from(Instant.now()));
            pstmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}

