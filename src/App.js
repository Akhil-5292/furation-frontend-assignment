// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import BookListing from './pages/BookListing';

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<BookListing/>} />
        <Route path="/books/:id" element={<BookDetails/>} />
        <Route path="/cart" element={<ShoppingCart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
