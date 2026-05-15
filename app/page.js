"use client";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ffcc00', fontSize: '48px', marginBottom: '10px' }}>🌪️ Taste Tornado</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>আপনার ডিজিটাল মেনু কার্ড এখন লাইভ!</p>
      
      <div style={{ padding: '20px', border: '2px solid #ffcc00', borderRadius: '20px', textAlign: 'center' }}>
        <h3 style={{ margin: '10px 0' }}>🍔 Special Burger - ৳২৫০</h3>
        <button style={{ backgroundColor: '#ffcc00', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
          অর্ডার করুন
        </button>
      </div>
    </main>
  );
}
