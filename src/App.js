import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scramble from './components/Scramble'
import Timer from './components/Timer'

function App() {
  return (
    <div className="App">
      <Scramble></Scramble>
      <Timer></Timer>
    </div>
  );
}

export default App;
