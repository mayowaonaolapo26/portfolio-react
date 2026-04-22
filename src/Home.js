function Home() {
  return (
    <div style={{padding: '80px 40px'}}>
      <p style={{color: '#e0a020', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px'}}>Designer · Rapper · Writer</p>
      <h1 style={{fontSize: '64px', color: '#ffffff', margin: '16px 0'}}>Of The Endless</h1>
      <p style={{color: '#aaaaaa', fontSize: '18px', maxWidth: '500px', lineHeight: 1.7}}>I build brands that speak before you do. Based in Lagos. Built different.</p>
      <div style={{display: 'flex', gap: '16px', marginTop: '32px'}}>
        <a href="/services" style={{backgroundColor: '#e0a020', color: '#111', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold'}}>See Services</a>
        <a href="/contact" style={{border: '1px solid #e0a020', color: '#e0a020', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none'}}>Get In Touch</a>
      </div>
    </div>
  );
}

export default Home;