import React, { useState } from "react";

function PlantCard({ plantName, plantImage, plantPrice }) {
  const [inStock, setInStock] = useState(true);

  const handleStockToggle = () => setInStock(!inStock);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;