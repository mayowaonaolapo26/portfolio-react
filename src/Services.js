const services = [
  { id: 1, title: 'Logo Design', description: 'Clean, memorable logos built around your brand identity.', price: '₦15,000' },
  { id: 2, title: 'Brand Identity', description: 'Full brand packages including logo, colors, and typography.', price: '₦35,000' },
  { id: 3, title: 'Flyers & Banners', description: 'Event and promo designs that stop the scroll.', price: '₦5,000' },
  { id: 4, title: 'Social Media Graphics', description: 'Consistent visual content for your brand online.', price: '₦8,000' },
  { id: 5, title: 'Business Cards', description: 'Professional cards that make a lasting impression.', price: '₦4,000' },
];

function ServiceCard({ title, description, price }) {
  return (
    <div style={{backgroundColor: '#1e1e1e', border: '1px solid #e0a020', borderRadius: '8px', padding: '24px'}}>
      <h3 style={{marginTop: 0, color: '#e0a020'}}>{title}</h3>
      <p style={{color: '#aaaaaa'}}>{description}</p>
      <p style={{color: '#e0a020', fontWeight: 'bold', fontSize: '20px'}}>{price}</p>
    </div>
  );
}

function Services() {
  return (
    <div style={{padding: '80px 40px'}}>
      <h1 style={{color: '#e0a020', fontSize: '48px', marginBottom: '40px'}}>Services</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px'}}>
        {services.map(service => (
          <ServiceCard key={service.id} title={service.title} description={service.description} price={service.price} />
        ))}
      </div>
    </div>
  );
}

export default Services;