import { useEffect, useState } from "react";
import orderBookData from "../assets/sampleOrderBookData.json";

const OrderBook = () => {
  const [buyData, setBuyData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [buyRatio, setBuyRatio] = useState();
  const [sellRatio, setSellRatio] = useState();

  useEffect(() => {
    const filteredBuyData = orderBookData
      .filter((record) => record.side === "BUY")
      .sort((x, y) => y.price - x.price);
    // .sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp));
    setBuyData(filteredBuyData);

    const filteredSellData = orderBookData
      .filter((record) => record.side === "SELL")
      .sort((x, y) => x.price - y.price);
    setSellData(filteredSellData);
  }, []);

  useEffect(() => {
    if (buyData.length + sellData.length > 0) {
      setBuyRatio((buyData.length * 100) / (buyData.length + sellData.length));
      setSellRatio(
        100 - (buyData.length * 100) / (buyData.length + sellData.length)
      );
    }
  }, [buyData, sellData]);

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
        <div
          className="border-2 border-green-700"
          style={{ width: buyRatio + "%" }}
        ></div>
        <div
          className="border-2 border-red-700"
          style={{ width: sellRatio + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default OrderBook;
