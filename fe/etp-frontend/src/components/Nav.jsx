import { useSelector, useDispatch } from "react-redux";
import {
  setQuantity,
  setSide,
  setStockSearch,
  setLimitPrice,
  resetState,
} from "../store/stockSlice";
import { createOrderAndRefreshThunk } from "../store/thunks";
import { Side } from "../clients/exchange";

const Nav = () => {
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock.value);

  const createOrder = (side) => {
    return () => {
      const request = {
        broker: "",
        symbol: "",
        price: stock.limitPrice,
        side: side,
        quantity: stock.quantity,
      };
      dispatch(createOrderAndRefreshThunk(request));
      dispatch(resetState());
    };
  };

  return (
    <div className="grid justify-center w-screen">
      <div className="grid grid-cols-1 gap-4 mb-4 max-w-80 max-h-80">
        <p className="text-lg">
          Stock: {<span className="font-bold">{stock.name}</span>}
        </p>
        <p className="text-lg">
          Total:{" "}
          {stock.limitPrice && stock.quantity ? (
            <span className="font-bold">
              ${stock.limitPrice * stock.quantity}
            </span>
          ) : (
            <span className="font-bold">$0</span>
          )}
        </p>
        <input
          type="text"
          id="search"
          placeholder="Search for a stock..."
          className="py-2 px-4 rounded-lg"
        />
        <div className="relative grid">
          <input
            type="number"
            id="limit-price"
            placeholder="Limit Price"
            onChange={(e) => {
              dispatch(setLimitPrice(e.target.value));
            }}
            className="py-2 px-4 rounded-lg w-full"
          />
        </div>
        <input
          type="number"
          id="quantity"
          placeholder="Quantity"
          onChange={(e) => {
            dispatch(setQuantity(e.target.value));
          }}
          className="py-2 px-4 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-80">
        <button
          className="bg-green-700 py-2 border-0 hover:bg-green-600"
          onClick={createOrder(Side.BUY)}
        >
          Buy
        </button>
        <button
          className="bg-red-700 py-2 border-0 hover:bg-red-600"
          onClick={createOrder(Side.SELL)}
        >
          Sell
        </button>
        <button
          onClick={() => {
            dispatch(resetState());
          }}
          className="bg-blue-700 py-2 border-0 hover:bg-blue-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Nav;
