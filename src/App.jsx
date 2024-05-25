import React, { useState } from 'react';
import './App.css';

function App() {
  const [coffeeOrder, setCoffeeOrder] = useState({
    size: 'Medium',
    type: 'Espresso',
    extras: []
  });

  const updateOrder = (key, value) => {
    setCoffeeOrder(prevOrder => ({
      ...prevOrder,
      [key]: value
    }));
  };

  const handleSizeChange = (e) => {
    updateOrder('size', e.target.value);
  };

  const handleTypeChange = (e) => {
    updateOrder('type', e.target.value);
  };

  const handleExtrasChange = (e) => {
    const extras = Array.from(e.target.selectedOptions, option => option.value);
    updateOrder('extras', extras);
  };

  return (
    <div className="container">
      <h2>Coffee Order</h2>
      <p>Size:
        <select className="select" value={coffeeOrder.size} onChange={handleSizeChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </p>
      <p>Type:
        <select className="select" value={coffeeOrder.type} onChange={handleTypeChange}>
          <option value="Espresso">Espresso</option>
          <option value="Latte">Latte</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Mocha">Mocha</option>
        </select>
      </p>
      <p>Extras:
        <select className="select" multiple value={coffeeOrder.extras} onChange={handleExtrasChange}>
          <option value="Milk">Milk</option>
          <option value="Sugar">Sugar</option>
          <option value="Cream">Cream</option>
          <option value="Chocolate Syrup">Chocolate Syrup</option>
        </select>
      </p>
      <h3>Order Summary</h3>
      <p>Size: {coffeeOrder.size}</p>
      <p>Type: {coffeeOrder.type}</p>
      <p>Extras: {coffeeOrder.extras.join(', ')}</p>
    </div>
  );
}

export default App;
