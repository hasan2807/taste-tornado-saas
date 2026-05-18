export default function Home() {
  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#ffcc00', fontSize: '40px' }}>🌪️ Taste Tornado</h1>
      <p style={{ fontSize: '20px', margin: '20px 0' }}>Our Restaurant Website is Live!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
        <div style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', width: '280px', backgroundColor: '#1e1e1e' }}>
          <div style={{ fontSize: '50px' }}>🍔</div>
          <h2>Special Burger</h2>
          <p style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '22px' }}>250 BDT</p>
        </div>
        
        <div style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', width: '280px', backgroundColor: '#1e1e1e' }}>
          <div style={{ fontSize: '50px' }}>🍕</div>
          <h2>Crunchy Pizza</h2>
          <p style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '22px' }}>800 BDT</p>
        </div>
      </div>
    </div>
  );
}
