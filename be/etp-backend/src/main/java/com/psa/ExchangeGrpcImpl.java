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
import com.psa.ExchangeOuterClass.Side;
import io.grpc.stub.StreamObserver;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.UUID;

public class ExchangeGrpcImpl extends ExchangeImplBase {

  public final Connection db;

  public ExchangeGrpcImpl(Connection db) {
    super();
    this.db = db;
  }

  @Override
  public void createOrder(
      CreateOrderRequest request,
      StreamObserver<CreateOrderResponse> responseObserver) {

    System.out.println("Andrew debugging: Entered createOrder.");

    StringBuilder sql = new StringBuilder();
    sql.append("INSERT INTO public.order (id, side, limit_price, quantity) VALUES ('");

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
    sql.append(side);

    sql.append("', ");
    sql.append(String.format("%.2f", request.getPrice()));

    sql.append(", ");
    sql.append(String.format("%d", request.getQuantity()));

    sql.append(")");

    try {
      System.out.println("Running SQL statement: " + sql);
      Statement statement = db.createStatement();
      int rowsAffected = statement.executeUpdate(sql.toString());
      System.out.println("Rows affected: " + rowsAffected);
    } catch(Exception e) {
      e.printStackTrace();
      return;
    }

    System.out.println("Andrew debugging: createOrder responding...");

    CreateOrderResponse response = CreateOrderResponse.newBuilder()
        .setId(id.toString())
        .build();
    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }

  @Override
  public void getOrders(
      GetOrdersRequest request,
      StreamObserver<GetOrdersResponse> responseObserver) {

    System.out.println("Andrew debugging: Entered getOrders.");

    StringBuilder sql = new StringBuilder();
    sql.append("SELECT * FROM public.order");

    try {
      System.out.println("Running SQL statement: " + sql);
      Statement statement = db.createStatement();
      ResultSet resultSet = statement.executeQuery(sql.toString());

      Builder response = GetOrdersResponse.newBuilder();
      while (resultSet.next()) {
        String id = resultSet.getString("id");
        Side side = resultSet.getString("side").equals("B") ? BUY : SELL;
        Double price = resultSet.getDouble("limit_price");
        Integer quantity = resultSet.getInt("quantity");
        response.addOrders(Order.newBuilder()
            .setId(id)
            .setSide(side)
            .setPrice(price)
            .setQuantity(quantity)
            .build());
      }

      System.out.println("Andrew debugging: getOrders responding...");

      responseObserver.onNext(response.build());
      responseObserver.onCompleted();
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}
