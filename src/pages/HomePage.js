import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'den ürünleri çekiyoruz
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Ürünlerinizi Keşfedin</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
