import React from 'react';
import './App.css';
import Schedule from './components/Schedule';
import Inventory from './components/Inventory';

function App() {
  let heroText = {
    textAlign: 'center'
  }
  
  return (
    <div className="App">
      <h1 style={heroText}>Markety Markenton</h1>
      <Schedule/>
      <Inventory/>
    </div>
  );
}

export default App;
