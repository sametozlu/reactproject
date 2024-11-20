import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = {
    id,
    name: 'Telefon',
    price: 7000,
    description: 'Yüksek kaliteli bir akıllı telefon.',
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-600 font-semibold text-xl">{product.price} TL</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Sepete Ekle</button>
    </div>
  );
};

export default ProductDetailPage;
