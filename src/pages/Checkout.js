// Checkout.js
import React, { useState } from 'react';
import './Checkout.css';
function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="address">Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />

        <button type="submit" className="place-order-button">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
