import React from 'react'
import PropTypes from 'prop-types'
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

Timer.propTypes = {
    time: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired
}

export default Timer