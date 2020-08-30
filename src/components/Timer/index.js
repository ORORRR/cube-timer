import React from 'react'
import { msToTime } from '../../utils/time'
import {
    Time,
    Indication,
    TimerBlock
  } from './style'

const Timer = ({time, isOn, startTimer, stopTimer})  => {
 
    return (
        <TimerBlock onClick={isOn? stopTimer : startTimer}>
            <Time >{msToTime(time)}</Time>
            <Indication>Click here or hit space to start/stop the timer</Indication>
        </TimerBlock>
    )
}

export default Timer