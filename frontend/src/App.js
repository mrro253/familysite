import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Family Website</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
