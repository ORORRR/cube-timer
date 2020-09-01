import React from 'react'
import PropTypes from 'prop-types'
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

SolvesList.propTypes = {
    solves: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.number,
        scramble: PropTypes.arrayOf(PropTypes.string),
        date: PropTypes.number
    })).isRequired,
    deleteSolve: PropTypes.func.isRequired
}

export default SolvesList