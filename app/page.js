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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
        {menu.map((item) => (
          <div key={item.id} style={{ border: '1px solid #333', padding: '15px', borderRadius: '10px', textAlign: 'center', backgroundColor: '#1e1e1e' }}>
            <div style={{ fontSize: '40px' }}>{item.img}</div>
            <h3>{item.name}</h3>
            <p>Price: {item.price} BDT</p>
            <button onClick={() => addToCart(item)} style={{ backgroundColor: '#ffcc00', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', borderTop: '2px solid #ffcc00', paddingTop: '20px', textAlign: 'center' }}>
        <h2>Cart Summary</h2>
        <p>Items in Cart: {cart.length}</p>
        <h3>Total: {total} BDT</h3>
      </div>
    </div>
  );
}

