import React from 'react'
import { msToTime } from '../../utils/time'

const Timer = ({time, isOn, startTimer, stopTimer})  => {
    let startButton = <button onClick={startTimer}>start</button> 
    let stopButton = <button onClick={stopTimer}>stop</button>

    return (
        <>
            <h3>{msToTime(time)}</h3>
            { isOn? stopButton : startButton }
        </>
    );
}

export default Timer