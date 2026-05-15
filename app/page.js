"use client";
import { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);
  const menu = [
    { id: 1, name: "Special Burger", price: 250, img: "🍔" },
    { id: 2, name: "Crunchy Pizza", price: 800, img: "🍕" },
    { id: 3, name: "Cold Coffee", price: 120, img: "🥤" }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ffcc00', textAlign: 'center' }}>🌪️ Taste Tornado POS</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {menu.map((item) => (
          <div key={item.id} style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', textAlign: 'center', backgroundColor: '#1e1e1e' }}>
            <div style={{ fontSize: '50px' }}>{item.img}</div>
            <h2>{item.name}</h2>
            <p style={{ color: '#ffcc00', fontSize: '20px' }}>{item.price} BDT</p>
            <button onClick={() => addToCart(item)} style={{ backgroundColor: '#ffcc00', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '50px', borderTop: '2px solid #ffcc00', paddingTop: '20px', textAlign: 'center' }}>
        <h2>Cart Summary</h2>
        <p>Total Items: {cart.length}</p>
        <h3 style={{ color: '#ffcc00' }}>Total Bill: {total} BDT</h3>
      </div>
    </div>
  );
}
