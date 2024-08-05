const {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
} = require("./exchange_pb.js");
const { ExchangeClient } = require("./exchange_grpc_web_pb.js");

var exchange = new ExchangeClient("http://localhost:8999");

var request = new CreateOrderRequest();
request.setMessage("Hello World!");

exchange.createOrder(request, {}, function (err, response) {
  try {
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});

// exchange.getOrders(request, {}, function (err, response) {
//   // ...
// });

export default exchange;
