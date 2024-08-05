import exchange_pb from "./exchange_pb.js";
import exchange_grpc_web_pb from "./exchange_grpc_web_pb.js";

const {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
} = exchange_pb;
const { ExchangeClient } = exchange_grpc_web_pb;

var exchange = new ExchangeClient("http://localhost:8999");

var request = new CreateOrderRequest();
request.setMessage("Hello World!");

exchange.createOrder(request, {}, function (err, response) {
  try {
    console.log(response);
  } catch (err) {
    console.error(err);
  }
});

// exchange.getOrders(request, {}, function (err, response) {
//   // ...
// });

export default exchange;
