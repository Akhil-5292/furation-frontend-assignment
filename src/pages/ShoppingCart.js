// ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/action';
import './ShoppingCart.css'; 
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
     <Link to='/checkout'>Proceed To Checkout</Link>
    </div>
  );
}

export default ShoppingCart;
