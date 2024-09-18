import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  setQuantity,
  setSide,
  setStockSearch,
  setLimitPrice,
  resetState,
  setSymbol,
} from "../store/stockSlice.ts";
import { resetLastPrice } from "../store/symbolsSlice.js";
import {
  createOrderAndRefreshThunk,
  getSymbolsThunk,
  getLastPrice,
} from "../store/thunks";
import { Side, OrderType } from "../clients/exchange";

const Nav = () => {
  const [query, setQuery] = useState("");
  const [autoHidden, setAutoHidden] = useState(true);
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock.value);
  const symbols = useSelector((state) => state.symbols.symbols);
  const lastPrice = useSelector((state) => state.symbols.lastPrice);
  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(getSymbolsThunk());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAutoHidden(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const createOrder = (side) => {
    return () => {
      const request = {
        broker: "123",
        symbol: stock.symbol,
        type: OrderType.LIMIT,
        price: stock.limitPrice,
        side: side,
        quantity: stock.quantity,
      };
      dispatch(createOrderAndRefreshThunk(request));
      dispatch(resetState());
    };
  };

  const filteredSymbols = symbols.filter((symbol) =>
    symbol.symbol.toLowerCase().includes(query.toLowerCase())
  );

  const limitedSymbols = filteredSymbols.slice(0, 5);

  return (
    <div className="grid justify-center w-screen">
      <div className="grid grid-cols-1 gap-4 mb-4 max-w-80 max-h-80">
        <p className="text-lg">
          Stock: {<span className="font-bold">{stock.symbol}</span>}
        </p>
        <p className="text-lg">
          Last Price:{" "}
          {lastPrice.price > 0 ? (
            <span className="font-bold">${lastPrice.price}</span>
          ) : (
            <span className="font-bold">$0</span>
          )}
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
        <div className="relative">
          <input
            type="text"
            id="search"
            placeholder="Search for a stock..."
            className="py-2 px-4 w-full rounded-lg border-none outline-none focus:border-gray-500 focus:shadow-inner focus:shadow-gray-500"
            onChange={(e) => {
              setQuery(e.target.value);
              setAutoHidden(e.target.value.length === 0);
            }}
            onFocus={() => setAutoHidden(false)}
            value={query}
          />
          <ul
            ref={dropdownRef}
            className={
              autoHidden
                ? "hidden"
                : "absolute bg-[#121212] w-full z-10 rounded-lg"
            }
          >
            {limitedSymbols.map((symbol, index) => (
              <div key={symbol.symbol}>
                <li
                  className="py-2 px-4 cursor-pointer"
                  onClick={() => {
                    dispatch(setSymbol(symbol.symbol));
                    setQuery(symbol.symbol);
                    const request = {
                      symbol: symbol.symbol,
                    };
                    dispatch(getLastPrice(request));
                    setAutoHidden(true);
                  }}
                >
                  {symbol.symbol}
                </li>
                {index < limitedSymbols.length - 1 && (
                  <span className="block w-full border-b border-gray-500"></span>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="relative grid">
          <input
            type="number"
            id="limit-price"
            placeholder="Limit Price"
            onChange={(e) => {
              dispatch(setLimitPrice(e.target.value));
            }}
            className="py-2 px-4 rounded-lg w-full border-none outline-none focus:border-gray-500 focus:shadow-inner focus:shadow-gray-500"
          />
        </div>
        <input
          type="number"
          id="quantity"
          placeholder="Quantity"
          onChange={(e) => {
            dispatch(setQuantity(e.target.value));
          }}
          className="py-2 px-4 rounded-lg border-none outline-none focus:border-gray-500 focus:shadow-inner focus:shadow-gray-500"
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
            dispatch(resetLastPrice());
            setQuery("");
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
