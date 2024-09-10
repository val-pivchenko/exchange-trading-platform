import Nav from "./components/Nav";
import MarketDepth from "./components/MarketDepth";
import OrderBook from "./components/OrderBook";

// alphavantage api key = 'TVGPCUJE195J33RD' for stock api

function App() {
  return (
    <>
      <Nav></Nav>
      <MarketDepth></MarketDepth>
      <OrderBook></OrderBook>
    </>
  );
}

export default App;
