package com.psa;

import static com.psa.ExchangeOuterClass.Side.BUY;
import static com.psa.ExchangeOuterClass.Side.SELL;

import com.psa.ExchangeGrpc.ExchangeImplBase;
import com.psa.ExchangeOuterClass.CreateOrderRequest;
import com.psa.ExchangeOuterClass.CreateOrderResponse;
import com.psa.ExchangeOuterClass.GetOrdersRequest;
import com.psa.ExchangeOuterClass.GetOrdersResponse;
import com.psa.ExchangeOuterClass.GetOrdersResponse.Builder;
import com.psa.ExchangeOuterClass.Order;
import com.psa.ExchangeOuterClass.OrderStatus;
import com.psa.ExchangeOuterClass.OrderType;
import com.psa.ExchangeOuterClass.Side;
import com.psa.mappers.EnumMappers;

import io.grpc.stub.StreamObserver;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.EnumMap;
import java.util.UUID;

public class ExchangeGrpcImpl extends ExchangeImplBase {

    public final Connection db;
    public final TradingEngine tradingEngine;

    public ExchangeGrpcImpl(Connection db) {
        super();
        this.db = db;
        this.tradingEngine = new TradingEngine(db);
    }

    @Override
    public void createOrder(
            CreateOrderRequest request,
            StreamObserver<CreateOrderResponse> responseObserver) {

        System.out.println("*** Entering createOrder().");

        StringBuilder sql = new StringBuilder();
        sql.append("INSERT INTO public.order (id, status, symbol, broker, side, type, price, quantity, quantity_filled, quantity_cancelled, timestamp) VALUES ('");

        StringBuilder id = new StringBuilder();
        char side;

        switch (request.getSide()) {
            case BUY:
                id.append('B');
                side = 'B';
                break;
            case SELL:
                id.append('S');
                side = 'S';
                break;
            default:
                throw new RuntimeException("Invalid side '" + request.getSide() + "'.");
        }

        id.append(UUID.randomUUID().toString().substring(0, 8).toUpperCase());

        sql.append(id);

        sql.append("', '");
        sql.append("OPEN");

        sql.append("', '");
        sql.append(request.getSymbol());

        sql.append("', '");
        sql.append(request.getBroker());

        sql.append("', '");
        sql.append(side);

        sql.append("', '");
        sql.append(request.getType());

        sql.append("', ");
        sql.append(String.format("%.2f", request.getPrice()));

        sql.append(", ");
        sql.append(String.format("%d", request.getQuantity()));

        sql.append(", ");
        sql.append("0");

        sql.append(", ");
        sql.append("0");

        sql.append(", ");
        sql.append("NOW()");

        sql.append(")");

        try {
            System.out.println("*** Running SQL statement: " + sql);
            Statement statement = db.createStatement();
            int rowsAffected = statement.executeUpdate(sql.toString());
            System.out.println("*** Rows affected: " + rowsAffected);
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

        System.out.println("*** Responding to createOrder().");

        CreateOrderResponse response = CreateOrderResponse.newBuilder()
                .setId(id.toString())
                .build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();

        System.out.println("*** Triggering scanOrderBook().");

        tradingEngine.scanOrderBook(request.getSymbol());
    }

    @Override
    public void getOrders(
            GetOrdersRequest request,
            StreamObserver<GetOrdersResponse> responseObserver) {

        System.out.println("*** Entering getOrders().");

        StringBuilder sql = new StringBuilder();

        switch(request.getStatus()) {
            case OPEN:
            case COMPLETE:
                sql.append("SELECT * FROM public.order WHERE status = '").append(request.getStatus()).append("'");
                System.out.println("*** Getting orders with status: '" + request.getStatus() + "'");
                break;
            default:
                sql.append("SELECT * FROM public.order");
                System.out.println("*** Getting all orders.");

        }

        try {
            System.out.println("*** Running SQL statement: " + sql);
            Statement statement = db.createStatement();
            ResultSet resultSet = statement.executeQuery(sql.toString());

            Builder response = GetOrdersResponse.newBuilder();
            while (resultSet.next()) {
                String id = resultSet.getString("id");
                OrderStatus status = EnumMappers.fromStringStatus(resultSet.getString("status"));

                String broker = resultSet.getString("broker");
                String symbol = resultSet.getString("symbol");
                Side side = resultSet.getString("side").equals("B") ? BUY : SELL;
                OrderType type = EnumMappers.fromStringType(resultSet.getString("type"));
                Double price = resultSet.getDouble("price");
                Integer quantity = resultSet.getInt("quantity");
                Integer quantityFilled = resultSet.getInt("quantity_filled");
                Integer quantityCancelled = resultSet.getInt("quantity_cancelled");
                response.addOrders(Order.newBuilder()
                        .setId(id)
                        .setStatus(status)
                        .setBroker(broker)
                        .setSymbol(symbol)
                        .setSide(side)
                        .setType(type)
                        .setPrice(price)
                        .setQuantity(quantity)
                        .setQuantityFilled(quantityFilled)
                        .setQuantityCancelled(quantityCancelled)
                        .build());
            }

            System.out.println("*** Responding to getOrders().");

            responseObserver.onNext(response.build());
            responseObserver.onCompleted();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
