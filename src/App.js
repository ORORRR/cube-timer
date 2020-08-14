import React, { useState, useEffect } from 'react'
import './App.css'
import Scramble from './components/Scramble'
import Timer from './components/Timer'
import ScrambleSchema from './components/ScrambleSchema'

const App = () => {
  const [timerTime, setTimerTime] = useState(0)
  const [timerStartTime, setTimerStartTime] = useState(0)
  const [timerIsOn, setTimerIsOn] = useState(false)

  const [currentScramble, setCurrentScramble] = useState(generateScramble(20))

  useEffect(() => {
    let interval = null;
    if (timerIsOn) {
      interval = setInterval(() => {
        setTimerTime(TimerTime => Date.now() - timerStartTime);
      }, 10)
    } else if (!timerIsOn && timerTime !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerIsOn]);

  const startTimer = () => {
    setTimerTime(0)
    setTimerStartTime(Date.now())
    setTimerIsOn(true)
  }

  const stopTimer = () => {
    setTimerIsOn(false)
  }
    
  const resetTimer = () => {
    stopTimer()
    setTimerTime(0)
    setCurrentScramble(generateScramble(20))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cube Timer</h1>
      </header>

      <Scramble scramble={currentScramble}></Scramble>
      <Timer 
        time={timerTime}
        isOn={timerIsOn}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
      <ScrambleSchema scramble={currentScramble}></ScrambleSchema>
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
