import React from 'react';
import './App.css';
import Schedule from './components/Schedule';
import Inventory from './components/Inventory';

function App() {
  let heroText = {
    textAlign: 'center',
    color: 'rgb(37,211,210)',
    fontFamily: 'cursive',
    fontSize: '70px',
    textShadow: '4px 3px 1px #ff0000'
  }

  return (
    <div className="App">
      <h1 style={heroText}>Miami Vice Farmers Market</h1>
      <Schedule/>
      <Inventory/>
    </div>
  );
}

export default App;
