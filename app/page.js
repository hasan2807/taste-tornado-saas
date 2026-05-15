"use client";
export default function Home() {
  return (
    <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ffcc00', fontSize: '48px' }}>🌪️ Taste Tornado</h1>
      <p style={{ fontSize: '20px' }}>আপনার ডিজিটাল মেনু কার্ড এখন লাইভ!</p>
      <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #ffcc00', borderRadius: '20px', display: 'inline-block' }}>
        <h3>🍔 Special Burger - ৳250</h3>
        <button style={{ backgroundColor: '#ffcc00', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 'bold' }}>অর্ডার করুন</button>
      </div>
    </div>
  );
}
