package com.psa;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.protobuf.services.ProtoReflectionService;

public class Main {
    public static void main(String[] args) throws Exception {
        Server server = ServerBuilder.forPort(8999)
                .addService(ProtoReflectionService.newInstance())
                .addService(new ExchangeGrpcImpl()).build();
        server.start();
        System.out.println("Server started on port " + server.getPort() + ".");

        server.awaitTermination();
    }
}
