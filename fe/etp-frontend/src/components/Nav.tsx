const Nav = () => {
  return (
    <div className="grid justify-center w-screen">
      <div className="grid grid-cols-1 gap-4 mb-4 max-w-80 max-h-80">
        <input
          type="text"
          id="search"
          placeholder="Search for a stock..."
          className="py-2 px-4 rounded-lg"
        />

        {/* <label htmlFor="quantity">Quantity</label> */}
        <input
          type="number"
          id="quantity"
          placeholder="Quantity"
          className="py-2 px-4 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-80">
        <button className="bg-green-700 py-2 border-0 hover:bg-green-600">
          Buy
        </button>
        <button className="bg-red-700 py-2 border-0 hover:bg-red-600">
          Sell
        </button>
        <button className="bg-blue-700 py-2 border-0 hover:bg-blue-600">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Nav;
