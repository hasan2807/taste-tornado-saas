export default function Home() {
  const menu = [
    { id: 1, name: "Special Burger", price: 250, img: "🍔" },
    { id: 2, name: "Crunchy Pizza", price: 800, img: "🍕" },
    { id: 3, name: "Cold Coffee", price: 120, img: "🥤" }
  ];

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#ffcc00' }}>🌪️ Taste Tornado Menu</h1>
      <p>Welcome to our restaurant!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px', alignItems: 'center' }}>
        {menu.map((item) => (
          <div key={item.id} style={{ border: '1px solid #333', padding: '15px', borderRadius: '10px', width: '300px', backgroundColor: '#1e1e1e' }}>
            <span style={{ fontSize: '40px' }}>{item.img}</span>
            <h2 style={{ margin: '10px 0' }}>{item.name}</h2>
            <p style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '20px' }}>{item.price} BDT</p>
            <button style={{ backgroundColor: '#ffcc00', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
