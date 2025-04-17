import React from "react";

const StockDisplay = ({ stock }) => {
  if (!stock) return null;

  return (
    <div className="stock-display">
      <h2>{stock["01. symbol"]}</h2>
      <p><strong>Price:</strong> ${stock["05. price"]}</p>
      <p><strong>Volume:</strong> {stock["06. volume"]}</p>
      <p><strong>Change:</strong> {stock["10. change percent"]}</p>
    </div>
  );
};

export default StockDisplay;
