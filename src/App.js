import { useState } from 'react';

const services = [
  { id: 1, title: 'Logo Design', description: 'Clean, memorable logos built around your brand identity.', price: '₦15,000' },
  { id: 2, title: 'Brand Identity', description: 'Full brand packages including logo, colors, and typography.', price: '₦35,000' },
  { id: 3, title: 'Flyers & Banners', description: 'Event and promo designs that stop the scroll.', price: '₦5,000' },
  { id: 4, title: 'Social Media Graphics', description: 'Consistent visual content for your brand online.', price: '₦8,000' },
  { id: 5, title: 'Business Cards', description: 'Professional cards that make a lasting impression.', price: '₦4,000' },
];

const skills = [
  { name: 'Logo Design', level: 90 },
  { name: 'Brand Identity', level: 85 },
  { name: 'Social Media Design', level: 80 },
  { name: 'Typography', level: 75 },
];

function Nav() {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #222'}}>
      <div style={{color: '#e0a020', fontWeight: 'bold', fontSize: '20px'}}>Of The Endless</div>
      <div style={{display: 'flex', gap: '24px'}}>
        <a href="#about" style={{color: '#aaaaaa', textDecoration: 'none'}}>About</a>
        <a href="#services" style={{color: '#aaaaaa', textDecoration: 'none'}}>Services</a>
        <a href="#skills" style={{color: '#aaaaaa', textDecoration: 'none'}}>Skills</a>
        <a href="#contact" style={{color: '#aaaaaa', textDecoration: 'none'}}>Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{padding: '80px 40px', borderBottom: '1px solid #222'}}>
      <p style={{color: '#e0a020', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px'}}>Designer · Rapper · Writer</p>
      <h1 style={{fontSize: '64px', color: '#ffffff', margin: '16px 0'}}>Of The Endless</h1>
      <p style={{color: '#aaaaaa', fontSize: '18px', maxWidth: '500px', lineHeight: 1.7}}>I build brands that speak before you do. Based in Lagos. Built different.</p>
      <div style={{display: 'flex', gap: '16px', marginTop: '32px'}}>
        <a href="#services" style={{backgroundColor: '#e0a020', color: '#111', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold'}}>See Services</a>
        <a href="#contact" style={{border: '1px solid #e0a020', color: '#e0a020', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none'}}>Get In Touch</a>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, price }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        backgroundColor: flipped ? '#e0a020' : '#1e1e1e',
        border: '1px solid #e0a020',
        borderRadius: '8px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        color: flipped ? '#111' : '#fff',
      }}
    >
      {flipped ? (
        <div>
          <p style={{fontSize: '20px', fontWeight: 'bold', margin: 0}}>Starting at</p>
          <p style={{fontSize: '28px', fontWeight: 'bold', margin: '8px 0'}}>{price}</p>
          <p style={{fontSize: '14px'}}>Click to go back</p>
        </div>
      ) : (
        <div>
          <h3 style={{marginTop: 0, color: '#e0a020'}}>{title}</h3>
          <p style={{color: '#aaaaaa'}}>{description}</p>
          <p style={{color: '#555', fontSize: '14px'}}>Click to see pricing</p>
        </div>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{padding: '80px 40px', borderBottom: '1px solid #222'}}>
      <h2 style={{color: '#e0a020', fontSize: '36px', marginBottom: '40px'}}>Services</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px'}}>
        {services.map(service => (
          <ServiceCard key={service.id} title={service.title} description={service.description} price={service.price} />
        ))}
      </div>
    </section>
  );
}

function SkillBar({ name, level }) {
  return (
    <div style={{marginBottom: '20px'}}>
      <p style={{color: '#aaaaaa', marginBottom: '8px'}}>{name}</p>
      <div style={{backgroundColor: '#1e1e1e', borderRadius: '6px', height: '10px', width: '100%'}}>
        <div style={{backgroundColor: '#e0a020', height: '10px', borderRadius: '6px', width: `${level}%`, transition: 'width 1s ease'}}></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{padding: '80px 40px', borderBottom: '1px solid #222'}}>
      <h2 style={{color: '#e0a020', fontSize: '36px', marginBottom: '40px'}}>Skills</h2>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </section>
  );
}

function Footer() {
  return (
    <footer style={{padding: '40px', borderTop: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#555', fontSize: '14px'}}>
      <p>&copy; 2026 Of The Endless. All rights reserved.</p>
      <a href="https://instagram.com/designsoftheendless" style={{color: '#e0a020', textDecoration: 'none'}}>Instagram</a>
    </footer>
  );
}

function App() {
  return (
    <div style={{backgroundColor: '#111', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif'}}>
      <Nav />
      <Hero />
      <Services />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;