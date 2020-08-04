import React, { useState, useEffect } from 'react'
const prettyMilliseconds = require('pretty-ms')


const Timer = ()  => {
    const [time, setTime] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [isOn, setIsOn] = useState(false)

    useEffect(() => {
        let interval = null;
        if (isOn) {
          interval = setInterval(() => {
            setTime(time => Date.now() - startTime);
          }, 1000)
        } else if (!isOn && time !== 0) {
          clearInterval(interval)
        }

        return () => clearInterval(interval)
    //   }, [isOn, time]);
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
            <h1>Timer</h1>
            <h3>{prettyMilliseconds(time, {colonNotation: true, secondsDecimalDigits: 2, keepDecimalsOnWholeSeconds: true})}</h3>

            {startButton}
            {stopButton}
            {resetButton}
        </>
    );


}


// class Timer extends React.Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         time: 0,
//         start: 0,
//         isOn: false
//       }
//       this.startTimer = this.startTimer.bind(this)
//       this.stopTimer = this.stopTimer.bind(this)
//       this.resetTimer = this.resetTimer.bind(this)
//     }
//     startTimer() {
//       this.setState({
//         time: this.state.time,
//         start: Date.now() - this.state.time,
//         isOn: true
//       })
//       this.timer = setInterval(() => this.setState({
//         time: Date.now() - this.state.start
//       }), 1);
//     }
//     stopTimer() {
//       this.setState({isOn: false})
//       clearInterval(this.timer)
//     }
//     resetTimer() {
//       this.setState({time: 0})
//     }
//     render() {
//       let start = (this.state.time == 0) ?
//         <button onClick={this.startTimer}>start</button> :
//         null
//       let stop = (this.state.isOn) ?
//         <button onClick={this.stopTimer}>stop</button> :
//         null
//       let reset = (this.state.time != 0 && !this.state.isOn) ?
//         <button onClick={this.resetTimer}>reset</button> :
//         null
//       let resume = (this.state.time != 0 && !this.state.isOn) ?
//         <button onClick={this.startTimer}>resume</button> :
//         null
//       return(
//         <div>
//           <h3>timer: {this.state.time}</h3>
//           {start}
//           {resume}
//           {stop}
//           {reset}
//         </div>
//       )
//     }
//   }

export default Timer;