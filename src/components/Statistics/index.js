import React from 'react'
import { msToTime } from '../../utils/time'

const Statistics = ({ solves })  => {

    const bestTime = solves.length && solves.reduce((currentBestTime, next) => {
        return currentBestTime < next['time'] ? currentBestTime : next['time']
    }, solves[0]['time']) || null

    const getAverageOf = (size)  => {
        if (solves.length < size )
            return null

        return solves.slice(-5).reduce((totalTime, next) => totalTime + next['time'], 0) / size
    }

    const averageOf5 = getAverageOf(5)
    const averageOf12 = getAverageOf(12)

    return (
        <div>
            <h3>Average of 5:</h3>
            <p>{ averageOf5? msToTime(averageOf5) : 'none' }</p>
            <h3>Average of 12:</h3>
            <p>{ averageOf12? msToTime(averageOf12) : 'none' }</p>
            <h3>Best:</h3>
            <p>{ bestTime? msToTime(bestTime) : 'none' }</p>
        </div>
    )
}

export default Statistics