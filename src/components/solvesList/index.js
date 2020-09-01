import React from 'react'
import { msToTime } from '../../utils/time'
import {
    SolveTable,
    DeleteButton
  } from './style'

const SolvesList = ({ solves, deleteSolve})  => {
    return (
        <SolveTable>
            <caption>Times :</caption>
            <tbody>
             {
                solves.slice().reverse().map((solve, i) => {        
                    return (
                        <tr key={i}>
                            <td>{msToTime(solve['time'])}</td>
                            <td>
                                <DeleteButton  onClick={() => deleteSolve(i)}><i className="fa fa-trash"></i></DeleteButton>
                            </td>
                        </tr>
                    )
                })
            }    
            </tbody>
        </SolveTable>
    )
}

export default SolvesList