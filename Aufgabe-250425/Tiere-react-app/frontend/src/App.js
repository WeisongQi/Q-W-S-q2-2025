import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [tiere, setTiere] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5005/tiere')
      .then(response => response.json())
      .then(data => setTiere(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Tiere</h1>
      <Link to={`/tiere/new`}>New Tier</Link>
      <ul>
        {tiere.map(tier => (
          <li key={tier.id}>
            <Link to={`/tiere/${tier.id}`}>{tier.tierart} - {tier.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
