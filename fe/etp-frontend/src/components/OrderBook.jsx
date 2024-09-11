import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrdersThunk } from "../store/thunks";
import { OrderStatus } from "../clients/exchange";

const OrderBook = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderBook);

  useEffect(() => {
    const request = {
      broker: "",
      symbol: "",
      status: OrderStatus.UNSET_ORDER_STATUS,
    };
    dispatch(getAllOrdersThunk(request));

    const interval = setInterval(() => {
      dispatch(getAllOrdersThunk(request));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="grid justify-center w-screen mt-12">
      <h2 className="text-xl text-center mb-4">Order Book</h2>
      {!orders.length ? (
        <p className="italic text-red-500 text-center">No Orders Yet</p>
      ) : (
        <div>
          <div className="grid grid-flow-col auto-cols-fr gap-8 text-center">
            <div>
              <p>Broker</p>
              {orders.map((data) => {
                return <p key={data.id}>{data.broker}</p>;
              })}
            </div>
            <div className="">
              <p>Symbol</p>
              {orders.map((data) => {
                return <p key={data.id}>{data.symbol}</p>;
              })}
            </div>
            <div className="">
              <p>Status</p>
              {orders.map((data) => {
                return (
                  <p key={data.id}>{data.status === 1 ? "Open" : "Complete"}</p>
                );
              })}
            </div>
            <div className="">
              <p>Side</p>
              {orders.map((data) => {
                return (
                  <p
                    key={data.id}
                    className={
                      data.side === 1 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {data.side === 1 ? "Buy" : "Sell"}
                  </p>
                );
              })}
            </div>
            <div className="">
              <p>Type</p>
              {orders.map((data) => {
                return (
                  <p key={data.id}>{data.type === 1 ? "Limit" : "Market"}</p>
                );
              })}
            </div>
            <div className="">
              <p>Price</p>
              {orders.map((data) => {
                return <p key={data.id}>{data.price}</p>;
              })}
            </div>
            <div className="">
              <p>Quantity</p>
              {orders.map((data) => {
                return <p key={data.id}>{data.quantity}</p>;
              })}
            </div>
            <div className="">
              <p>Filled</p>
              {orders.map((data) => {
                return <p key={data.id}>{data.quantityFilled}</p>;
              })}
            </div>
            <div className="">
              <p>Cancelled</p>
              {orders.map((data) => {
                return <p key={data.id}>{data.quantityCancelled}</p>;
              })}
            </div>
            <div className="">
              <p>Remaining</p>
              {orders.map((data) => {
                return (
                  <p key={data.id}>
                    {data.quantity -
                      data.quantityFilled -
                      data.quantityCancelled}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderBook;
