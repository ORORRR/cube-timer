import React, { useState, useEffect } from 'react'
import './App.css'
import Scramble from './components/Scramble'
import Timer from './components/Timer'
import ScrambleSchema from './components/ScrambleSchema'
import SolvesList from './components/solvesList'
import SolvesGraph from './components/solvesGraph'
import { generateScramble } from './utils/cube'
import Statistics from './components/Statistics'

const App = () => {
  const [timerTime, setTimerTime] = useState(0)
  const [timerStartTime, setTimerStartTime] = useState(0)
  const [timerIsOn, setTimerIsOn] = useState(false)

  useEffect(() => {
    let interval = null
    if (timerIsOn) {
      interval = setInterval(() => {
        setTimerTime(Date.now() - timerStartTime)
      }, 10)
    } else if (timerTime !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerIsOn])

  const startTimer = () => {
    setTimerTime(0)
    setTimerStartTime(Date.now())
    setTimerIsOn(true)
  }

  const stopTimer = () => {
    setTimerIsOn(false)
    setSolves(solves => [...solves, {time: timerTime, scramble: currentScramble, date: timerStartTime}])
    setCurrentScramble(generateScramble(20))
  }

  // ---------------------------------------------------------------------------------------------

  const [spaceKeyPressed, setSpaceKeyPressed] = useState(false)

  useEffect(() => {
    const spaceDownHandler = ({ key }) => {
     if (key === ' ') {
       setSpaceKeyPressed(true)
     }
    }

    const spaceUpHandler = ({ key }) => {
      if (key === ' ') {
        setSpaceKeyPressed(false)
      }
    }

    const preventScrollOnSpace  = (event) => {
      event.preventDefault();
    }

    window.addEventListener('keydown', preventScrollOnSpace)
    window.addEventListener('keydown', spaceDownHandler)
    window.addEventListener('keyup', spaceUpHandler)

    return () => {
      window.removeEventListener('keydown', preventScrollOnSpace)
      window.removeEventListener('keydown', spaceDownHandler);
      window.removeEventListener('keyup', spaceUpHandler);
    }
  }, [])

  useEffect(() => {
    if (spaceKeyPressed){
      timerIsOn? stopTimer() : startTimer()
    }
  }, [spaceKeyPressed])

  // ---------------------------------------------------------------------------------------------

  const [currentScramble, setCurrentScramble] = useState(generateScramble(20))

  const [solves, setSolves] = useState( JSON.parse(localStorage.getItem('solves')) || [])

  useEffect(() => {
    localStorage.setItem('solves', JSON.stringify(solves))
  }, [solves])

  const deleteSolve = (index) => {
    setSolves(solves => solves.filter((_, i) => i !== index))
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
      />
      <ScrambleSchema scramble={currentScramble}></ScrambleSchema>
      <SolvesList solves={solves} deleteSolve={deleteSolve}></SolvesList>
      <Statistics solves={solves}></Statistics>
      <SolvesGraph solves={solves}></SolvesGraph>
    </div>
  );
}

export default App
