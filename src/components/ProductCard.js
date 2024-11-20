import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} TL</p>
      <Link to={`/product/${product.id}`} className="btn">Detaylar</Link>
    </div>
  );
};

export default ProductCard;
