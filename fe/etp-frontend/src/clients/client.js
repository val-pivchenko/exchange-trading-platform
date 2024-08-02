/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
} = require("./exchange_pb.js");
const { ExchangeClient } = require("./exchange_grpc_web_pb.js");

var exchange = new ExchangeClient("http://localhost:8080");

var request = new CreateOrderRequest();
request.setMessage("Hello World!");

exchange.createOrder(request, {}, function (err, response) {
  // ...
});

exchange.getOrders(request, {}, function (err, response) {
  // ...
});
