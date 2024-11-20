import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Shoply</h1>
      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/cart">Sepetim</Link>
        <Link to="/checkout">Satın Al</Link>
        <Link to="/login">Giriş Yap</Link>
        <Link to="/user">Profil</Link>
      </nav>
    </header>
  );
};

export default Header;
