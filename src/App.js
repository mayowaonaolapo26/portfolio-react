import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';

function Nav() {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #222'}}>
      <Link to="/" style={{color: '#e0a020', fontWeight: 'bold', fontSize: '20px', textDecoration: 'none'}}>Of The Endless</Link>
      <div style={{display: 'flex', gap: '24px'}}>
        <Link to="/" style={{color: '#aaaaaa', textDecoration: 'none'}}>Home</Link>
        <Link to="/services" style={{color: '#aaaaaa', textDecoration: 'none'}}>Services</Link>
        <Link to="/contact" style={{color: '#aaaaaa', textDecoration: 'none'}}>Contact</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{backgroundColor: '#111', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif'}}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;