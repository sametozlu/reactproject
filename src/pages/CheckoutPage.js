import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h2>Ödeme İşlemi</h2>
      <form>
        <input type="text" placeholder="Ad Soyad" />
        <input type="text" placeholder="Adres" />
        <input type="text" placeholder="Telefon" />
        <button type="submit">Ödeme Yap</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
