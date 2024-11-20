import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import CheckoutPage from './pages/CheckoutPage';
import CartProvider from './context/CartContext';
import UserPage from './pages/UserPage';
import "./App.css"
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
