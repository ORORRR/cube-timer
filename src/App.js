import React from 'react';
import './App.css';
import Scramble from './components/Scramble'
import Timer from './components/Timer'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cube Timer</h1>
      </header>

      <Scramble></Scramble>
      <Timer></Timer>
    </div>
  );
}

export default App;
