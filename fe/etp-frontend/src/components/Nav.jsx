import { useSelector, useDispatch } from "react-redux";
import { setQuantity, setStockSearch, resetState } from "../store/slice";
import sampleData from "../assets/sampleData.json";
import exchangeService from "../clients/exchangeService";
import { useEffect, useState } from "react";
import { CreateOrderRequest } from "../clients/exchange";

const Nav = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = {
          price: 10,
          side: 0,
          quantity: 14,
        };

        const { response } = await exchangeService.createOrder(request)
          .response;
        setResponse(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const stock = useSelector((state) => state.stock.value);
  const dispatch = useDispatch();

  const filterSearch = (searchValue) => {
    sampleData.filter((data) => data.name.includes(searchValue));
  };

  return (
    <div className="grid justify-center w-screen">
      <div className="grid grid-cols-1 gap-4 mb-4 max-w-80 max-h-80">
        <p className="text-lg">
          Stock: {<span className="font-bold">{stock.name}</span>}
        </p>
        <p className="text-lg">
          Price per share: {<span className="font-bold">${stock.price}</span>}
        </p>
        <p className="text-lg">
          Total:{" "}
          {<span className="font-bold">${stock.price * stock.quantity}</span>}
        </p>
        <p className="text-lg">{response}</p>
        <input
          type="text"
          id="search"
          placeholder="Search for a stock..."
          // onChange={(e) => {
          //   dispatch(setStockSearch(e.target.value));
          // }}
          onChange={(e) => {
            filterSearch(e.target.value);
          }}
          className="py-2 px-4 rounded-lg"
        />
        <div></div>
        {/* <label htmlFor="quantity">Quantity</label> */}
        <input
          type="number"
          id="quantity"
          placeholder="Quantity"
          value={stock.quantity}
          onChange={(e) => {
            dispatch(setQuantity(e.target.value));
          }}
          className="py-2 px-4 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-80">
        <button
          onClick={() => {
            exchange.createOrder();
          }}
          className="bg-green-700 py-2 border-0 hover:bg-green-600"
        >
          Buy
        </button>
        <button className="bg-red-700 py-2 border-0 hover:bg-red-600">
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
