// BookListing.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookListing.css'; 

function BookListing() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    const fetchedBooks = [
      { id: 1, title: 'Book 1', author: 'Author 1', description: 'This is Book store' },
      { id: 2, title: 'Book 2', author: 'Author 2', description: 'This is Book store' },
      { id: 3, title: 'Book 3', author: 'Author 3', description: 'This is Book store' },
      { id: 4, title: 'Book 4', author: 'Author 4', description: 'This is Book store' },
      { id: 5, title: 'Book 5', author: 'Author 5', description: 'This is Book store' },
      { id: 6, title: 'Book 6', author: 'Author 6', description: 'This is Book store' },
      { id: 7, title: 'Book 7', author: 'Author 7', description: 'This is Book store' },
      { id: 8, title: 'Book 8', author: 'Author 8', description: 'This is Book store' },
      { id: 9, title: 'Book 9', author: 'Author 9', description: 'This is Book store' },
      { id: 10, title: 'Book 10', author: 'Author 10', description: 'This is Book store' },
      { id: 11, title: 'Book 11', author: 'Author 11', description: 'This is Book store' },
      { id: 12, title: 'Book 12', author: 'Author 12', description: 'This is Book store' },
      { id: 13, title: 'Book 13', author: 'Author 13', description: 'This is Book store' },
      { id: 14, title: 'Book 14', author: 'Author 14', description: 'This is Book store' },
      { id: 15, title: 'Book 15', author: 'Author 15', description: 'This is Book store' },
    ];
    setBooks(fetchedBooks);
  }, []);

  return (
    <div className="book-listing-container">
      <h1>Book Listing</h1>
      <div className='list-container'>
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <Link to={`/books/${book.id}`} className="view-details-link">View Details</Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default BookListing;
