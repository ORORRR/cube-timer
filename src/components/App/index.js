import React, { useState, useEffect } from 'react'
import Scramble from '../Scramble'
import Timer from '../Timer'
import ScrambleSchema from '../ScrambleSchema'
import SolvesList from '../solvesList'
import SolvesGraph from '../solvesGraph'
import { generateScramble } from '../../utils/cube'
import Statistics from '../Statistics'
import {
  CubeTimer,
  Header,
  Utilities,
  SchemaStatsColumn,
  GraphColumn,
  SolvesColumn,
  SchemaRow,
  StatsRow
} from './style'
import clockImage from './../../img/timer.png'

import { format } from 'highcharts'

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
    <CubeTimer>
      <Header>
        <p>Cube Timer <img src={clockImage}/></p>
        <p>by <span>ORORRR</span></p>
      </Header>

      <Scramble scramble={currentScramble}></Scramble>
      <Timer 
        time={timerTime}
        isOn={timerIsOn}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />

      <Utilities>
        <SchemaStatsColumn>
          <SchemaRow>
            <ScrambleSchema scramble={currentScramble}></ScrambleSchema>
          </SchemaRow>
          <StatsRow>
            <Statistics solves={solves}></Statistics>
          </StatsRow>
        </SchemaStatsColumn>
        
        <GraphColumn>
          <SolvesGraph solves={solves}></SolvesGraph>
        </GraphColumn>

        <SolvesColumn>
          <SolvesList solves={solves.reverse()} deleteSolve={deleteSolve}></SolvesList>
        </SolvesColumn>
      </Utilities>

      
    </CubeTimer>
  )
}

export default App
