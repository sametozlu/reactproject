import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const mockProducts = [
    { id: 1, name: 'Telefon', price: 7000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Laptop', price: 15000, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
