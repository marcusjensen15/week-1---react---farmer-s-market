import React from 'react';
import './App.css';
import Schedule from './components/Schedule';
import Inventory from './components/Inventory';

function App() {
  return (
    <div className="App">
    <Schedule/>
    <Inventory/>
    </div>
  );
}

export default App;
