import React, { useState, useEffect } from 'react'

const Timer = ()  => {
    const [time, setTime] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        let interval = null;
        if (isOn) {
          interval = setInterval(() => {
            setTime(time => Date.now() - startTime);
          }, 10)
        } else if (!isOn && time !== 0) {
          clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isOn]);

    const startTimer = () => {
        setTime(0)
        setStartTime(Date.now())
        setIsOn(true)
    }

    const stopTimer = () => {
        setIsOn(false)
    }
      
    const resetTimer = () => {
        stopTimer()
        setTime(0)
    }

    let startButton = (time === 0 && !isOn) ?
        <button onClick={startTimer}>start</button> :
        null
    let stopButton = (isOn) ?
        <button onClick={stopTimer}>stop</button> :
        null
    let resetButton = (time !== 0 && !isOn) ?
        <button onClick={resetTimer}>reset</button> :
        null

    return (
        <>
            <h3>{msToTime(time)}</h3>
            {startButton}
            {stopButton}
            {resetButton}
        </>
    );
}

function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let milliseconds =  parseInt((duration % 1000) / 10)

    if(minutes > 0){
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        minutes += ":"
    }
    else
        minutes = ""

    seconds = (seconds < 10) ? "0" + seconds : seconds
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds

    return minutes + seconds + "." + milliseconds
  }

export default Timer