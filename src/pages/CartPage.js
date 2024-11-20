import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>Sepetiniz boş.</p>;
  }

  return (
    <div className="cart-page">
      <h1>Sepetim</h1>
      <div>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price} TL</p>
            <button onClick={() => removeFromCart(item.id)}>Sil</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
