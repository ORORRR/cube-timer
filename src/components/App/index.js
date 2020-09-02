import React, { useState, useEffect, useRef } from 'react'
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

const App = () => {
  const [timerTime, setTimerTime] = useState(0)
  const timerTimeRef = useRef(timerTime)
  const [timerStartTime, setTimerStartTime] = useState(0)
  const [timerIsOn, setTimerIsOn] = useState(false)
  const timerIsOnRef = useRef(timerIsOn)

  useEffect(() => {
    timerIsOnRef.current = timerIsOn
  }, [timerIsOn])

  useEffect(() => {
    timerTimeRef.current = timerTime
  }, [timerTime])

  useEffect(() => {
    let interval = null
    if (timerIsOn) {
      interval = setInterval(() => {
        if(timerIsOnRef.current){
          setTimerTime(Date.now() - timerStartTime)
        }
      }, 10)
    } else if (timerTime !== 0) {
      clearInterval(interval)
      setTimeout(() => {
        setSolves(solves => [...solves, {time: timerTimeRef.current, scramble: currentScramble, date: timerStartTime}])
        setCurrentScramble(generateScramble(20))
      }, 15)
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
  }

  const saveSolve = () =>  {
    setSolves(solves => [{time: timerTimeRef.current, scramble: currentScramble, date: timerStartTime}, ...solves ])
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
        <p>Cube Timer <img src={clockImage}/>lol</p>
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
          <SolvesList solves={solves} deleteSolve={deleteSolve}></SolvesList>
        </SolvesColumn>
      </Utilities>

      
    </CubeTimer>
  )
}

export default App
