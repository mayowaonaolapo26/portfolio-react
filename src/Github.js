import { useState, useEffect } from 'react';

function Github() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/mayowaonaolapo26')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{padding: '80px 40px', color: '#aaaaaa'}}>Loading...</div>;
  }

  return (
    <div style={{padding: '80px 40px'}}>
      <h1 style={{color: '#e0a020', fontSize: '48px', marginBottom: '40px'}}>GitHub</h1>
      <div style={{display: 'flex', alignItems: 'center', gap: '24px', backgroundColor: '#1e1e1e', border: '1px solid #e0a020', borderRadius: '8px', padding: '32px'}}>
        <img src={profile.avatar_url} alt="avatar" style={{width: '100px', height: '100px', borderRadius: '50%', border: '2px solid #e0a020'}} />
        <div>
          <h2 style={{color: '#ffffff', marginTop: 0}}>{profile.name}</h2>
          <p style={{color: '#aaaaaa', margin: '4px 0'}}>Public Repos: {profile.public_repos}</p>
          <p style={{color: '#aaaaaa', margin: '4px 0'}}>Followers: {profile.followers}</p>
          <a href={profile.html_url} style={{color: '#e0a020'}} target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Github;