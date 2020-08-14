import React from 'react'

const Timer = ({time, isOn, startTimer, stopTimer, resetTimer})  => {
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