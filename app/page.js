"use client";

export default function Home() {
  const menu = [
    { id: 1, name: "Special Burger", price: 250, img: "🍔" },
    { id: 2, name: "Crunchy Pizza", price: 800, img: "🍕" },
    { id: 3, name: "Cold Coffee", price: 120, img: "🥤" }
  ];

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#ffcc00', fontSize: '40px', marginTop: '20px' }}>🌪️ Taste Tornado</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Best Food in Town!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        {menu.map((item) => (
          <div key={item.id} style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', width: '280px', backgroundColor: '#1e1e1e', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '50px' }}>{item.img}</div>
            <h2 style={{ margin: '10px 0', fontSize: '24px' }}>{item.name}</h2>
            <p style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '22px', margin: '5px 0' }}>{item.price} BDT</p>
            <button 
              onClick={() => alert(`${item.name} ordered!`)}
              style={{ backgroundColor: '#ffcc00', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', width: '100%', fontSize: '16px' }}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
      <footer style={{ marginTop: '50px', color: '#555', fontSize: '14px' }}>© 2026 Taste Tornado SaaS</footer>
    </div>
  );
}
