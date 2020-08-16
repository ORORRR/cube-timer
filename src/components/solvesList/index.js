import React from 'react'
import { msToTime } from '../../utils/time'

const SolvesList = ({ solves })  => {
    return (
        <div>
            {
                solves.map((solve, i) => {        
                    return (
                        <p key={i}>{msToTime(solve['time'])}</p>
                    )
                })
            }
        </div>
    );
}

export default SolvesList