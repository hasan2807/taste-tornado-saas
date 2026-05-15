"use client";
import { useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);
  const menu = [
    { id: 1, name: "Special Burger", price: 250, img: "🍔" },
    { id: 2, name: "Crunchy Pizza", price: 800, img: "🍕" },
    { id: 3, name: "Cold Coffee", price: 120, img: "🥤" }
  ];

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#ffcc00' }}>🌪️ Taste Tornado</h1>
      <div style={{ marginTop: '20px' }}>
        {menu.map(item => (
          <div key={item.id} style={{ backgroundColor: '#1e1e1e', margin: '10px', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
            <h3>{item.img} {item.name} - ৳{item.price}</h3>
            <button onClick={() => alert('Order taken!')} style={{ backgroundColor: '#ffcc00', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' }}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
