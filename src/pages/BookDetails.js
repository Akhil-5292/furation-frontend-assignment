// BookDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';
import './BookDetails.css'; 

function BookDetails({ match }) {
  const id = match && match.params ? match.params.id : null;
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const book = books && books.find((book) => book.id === parseInt(id, 10));

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));
    }
  };

  return (
    <div className="book-details-container">
      <h1>Book Details</h1>
      {book ? (
        <>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
}

export default BookDetails;