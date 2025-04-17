import React, { useState } from "react";

const StockSearch = ({ onSearch }) => {
  const [symbol, setSymbol] = useState("");

  const handleSearch = () => {
    if (symbol.trim() !== "") onSearch(symbol.toUpperCase());
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter stock symbol (e.g. AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default StockSearch;
