// src/App.js
import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <h1>My React Button</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default App;
