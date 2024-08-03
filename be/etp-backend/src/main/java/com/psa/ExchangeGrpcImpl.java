package com.psa;

import com.psa.ExchangeGrpc.ExchangeImplBase;
import com.psa.ExchangeOuterClass.CreateOrderRequest;
import com.psa.ExchangeOuterClass.CreateOrderResponse;
import io.grpc.stub.StreamObserver;

public class ExchangeGrpcImpl extends ExchangeImplBase {

  @Override
  public void createOrder(CreateOrderRequest request, StreamObserver<CreateOrderResponse> responseObserver) {

    CreateOrderResponse response = CreateOrderResponse.newBuilder()
        .setId("asdf")
        .build();
    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }
}