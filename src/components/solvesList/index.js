import React from 'react'
import { msToTime } from '../../utils/time'

const SolvesList = ({ solves, deleteSolve})  => {
    return (
        <table>
            <tbody>
             {
                solves.map((solve, i) => {        
                    return (
                        <tr key={i}>
                            <td>{msToTime(solve['time'])}</td>
                            <td><button onClick={() => deleteSolve(i)}>delete</button></td>
                        </tr>
                    )
                })
            }    
            </tbody>
        </table>
    )
}

export default SolvesList