const OrderBook = () => {
  return (
    <div className="grid justify-center w-screen mt-12">
      <h2 className="text-xl text-center mb-4">Order Book</h2>
      <div className="grid grid-flow-col auto-cols-fr gap-8 text-center">
        <div className="">
          <p>Orders</p>
        </div>
        <div className="">
          <p>Quantity</p>
        </div>
        <div className="">
          <p>Buy</p>
        </div>
        <div className="">
          <p>Sell</p>
        </div>
        <div className="">
          <p>Quantity</p>
        </div>
        <div className="">
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
