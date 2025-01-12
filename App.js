import React from 'react';
import BpkButton from 'bpk-component-button';
import 'bpk-stylesheets'; 

import './App.css'; 

function App() {
  const handleClick = () => {
    alert('Hello from Backpack!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Backpack App</h1>
        <p>This is a sample app built with the Backpack Design System.</p>
        <BpkButton onClick={handleClick}>Click Me</BpkButton>
      </header>
    </div>
  );
}

export default App;
