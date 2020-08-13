import React from 'react'
import './App.css'
import Scramble from './components/Scramble'
import Timer from './components/Timer'
import ScrambleSchema from './components/ScrambleSchema'

const App = () => {

  let scramble = generateScramble(20)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cube Timer</h1>
      </header>

      <Scramble scramble={scramble}></Scramble>
      <Timer></Timer>
      <ScrambleSchema scramble={scramble}></ScrambleSchema>
    </div>
  );
}


const generateScramble = (length = 20) => {
  const moves = [
    "R",  "L",  "U",  "D",  "F",  "B",
    "R'", "L'", "U'", "D'", "F'", "B'",
    "R2", "L2", "U2", "D2", "F2", "B2"
  ]

  return Array(length).fill().map(() => moves[Math.floor(Math.random() * moves.length)])
}

export default App
