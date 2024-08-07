import { useEffect, useState } from "react";
import orderBookData from "../assets/sampleOrderBookData.json";

const OrderBook = () => {
  const [buyData, setBuyData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [buyRatio, setBuyRatio] = useState();

  useEffect(() => {
    const setDataAndRatio = async () => {
      setBuyData(
        orderBookData
          .filter((record) => record.side === "BUY")
          .sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp))
      );
      setSellData(
        orderBookData
          .filter((record) => record.side === "SELL")
          .sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp))
      );

      setBuyRatio((buyData.length * 100) / (buyData.length + sellData.length));
    };
    setDataAndRatio();
  }, []);

  return (
    <div className="grid justify-center w-screen mt-12">
      <h2 className="text-xl text-center mb-4">Order Book</h2>
      <div className="grid grid-flow-col auto-cols-fr gap-8 text-center">
        <div className="">
          {/* Find out what orders should be, currently returning 1*/}
          <p>Orders</p>
          {buyData.map((data) => {
            return <p key={data.id}>1</p>;
          })}
        </div>
        <div className="">
          <p>Quantity</p>
          {buyData.map((data) => {
            return <p key={data.id}>{data.quantity}</p>;
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
          <p>Quantity</p>
          {sellData.map((data) => {
            return <p key={data.id}>{data.quantity}</p>;
          })}
        </div>
        <div className="">
          {/* Find out what orders should be, currently returning 1 */}
          <p>Orders</p>
          {sellData.map((data) => {
            return <p key={data.id}>1</p>;
          })}
        </div>
      </div>
      <div className="w-full mt-8 flex">
        <div className={`w-[${buyRatio}%] border-2 border-green-700`}></div>
        <div className={`w-[${100 - buyRatio}%] border-2 border-red-700`}></div>
      </div>
    </div>
  );
};

export default OrderBook;
