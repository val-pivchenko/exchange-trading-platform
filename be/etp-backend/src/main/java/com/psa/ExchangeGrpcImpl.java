package com.psa;

import com.psa.*;
import io.grpc.stub.StreamObserver;

public class ExchangeGrpcImpl extends com.psa.ExchangeGrpc.ExchangeImplBase {
    @Override
    public void createOrder(
            com.psa.ExchangeOuterClass.CreateOrderRequest request,
            StreamObserver<com.psa.ExchangeOuterClass.CreateOrderResponse> responseObserver) {
        com.psa.ExchangeOuterClass.CreateOrderResponse response = com.psa.ExchangeOuterClass.CreateOrderResponse.newBuilder()
                .setId("test")
                .build();
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
