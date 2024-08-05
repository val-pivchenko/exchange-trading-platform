package com.psa;

import com.psa.*;
import io.grpc.stub.StreamObserver;

public class ExchangeGrpcImpl extends com.psa.ExchangeGrpc.ExchangeImplBase {
    @Override
    public void createOrder(
            com.psa.ExchangeOuterClass.CreateOrderRequest request,
            StreamObserver<com.psa.ExchangeOuterClass.CreateOrderResponse> responseObserver) {
        System.out.println("before");
        com.psa.ExchangeOuterClass.CreateOrderResponse response = com.psa.ExchangeOuterClass.CreateOrderResponse.newBuilder()
                .setId("test")
                .build();
        System.out.println("after");
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
