import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersThunk } from "../store/thunks";
import { OrderStatus } from "../clients/exchange";

const MarketDepth = () => {
  const dispatch = useDispatch();
  const { buyData, sellData, buyRatio, sellRatio, orders } = useSelector(
    (state) => state.orderBook
  );
  useEffect(() => {
    const request = {
      broker: "",
      symbol: "",
      status: OrderStatus.OPEN,
    };
    dispatch(getOrdersThunk(request));
  }, [dispatch]);

  return (
    <div className="grid justify-center w-screen mt-12">
      <h2 className="text-xl text-center mb-4">Market Depth</h2>
      {!orders.length ? (
        <p className="italic text-red-500">No Orders Yet</p>
      ) : (
        <div>
          <div className="grid grid-flow-col auto-cols-fr gap-8 text-center">
            <div>
              <p>Orders</p>
              {buyData.map((data) => {
                return <p key={data.id}>1</p>;
              })}
            </div>
            <div className="">
              <p>Buy Quantity</p>
              {buyData.map((data) => {
                return (
                  <p key={data.id}>
                    {data.quantity -
                      data.quantityFilled -
                      data.quantityCancelled}
                  </p>
                );
              })}
            </div>
            <div className="">
              <p>Buy</p>
              {buyData.map((data) => {
                return (
                  <p key={data.id} className="text-green-500">
                    {data.price}
                  </p>
                );
              })}
            </div>
            <div className="">
              <p>Sell</p>
              {sellData.map((data) => {
                return (
                  <p key={data.id} className="text-red-500">
                    {data.price}
                  </p>
                );
              })}
            </div>
            <div className="">
              <p>Sell Quantity</p>
              {sellData.map((data) => {
                return (
                  <p key={data.id}>
                    {data.quantity -
                      data.quantityFilled -
                      data.quantityCancelled}
                  </p>
                );
              })}
            </div>
            <div className="">
              <p>Orders</p>
              {sellData.map((data) => {
                return <p key={data.id}>1</p>;
              })}
            </div>
          </div>
          <div className="w-full mt-8 flex">
            <span
              className="border-2 border-green-700"
              style={{ width: buyRatio + "%" }}
            ></span>
            <span
              className="border-2 border-red-700"
              style={{ width: sellRatio + "%" }}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketDepth;
