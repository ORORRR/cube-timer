import React from 'react'
import PropTypes from 'prop-types'


const Scramble = ({ scramble })  => {
    return <h1>{scramble.join(" ")}</h1>
}

Scramble.propTypes = {
    scramble: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Scramble