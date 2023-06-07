// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Bookstore!</h1>
      <Link to="/books" className="browse-link">Browse Books</Link>
    </div>
  );
}

export default Home;
