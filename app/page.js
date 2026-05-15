"use client";

export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#121212', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ color: '#ffcc00', fontSize: '40px', marginBottom: '10px' }}>🌪️ Taste Tornado</h1>
      <p style={{ fontSize: '18px' }}>আপনার ডিজিটাল মেনু কার্ড এখন লাইভ!</p>
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        border: '2px solid #ffcc00', 
        borderRadius: '15px',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>🍔 Special Burger</h3>
        <p style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '20px' }}>৳ ২৫০</p>
        <button style={{ 
          backgroundColor: '#ffcc00', 
          border: 'none', 
          padding: '10px 20px', 
          borderRadius: '8px', 
          fontWeight: 'bold',
          cursor: 'pointer' 
        }}>অর্ডার করুন</button>
      </div>
    </main>
  );
}
