import React from 'react'
import PropTypes from 'prop-types'


const Caret = ({ column, dir }) => {
    return <i className={'bi bi-caret-' + dir[0] + '-fill'} style={ { opacity: dir[1] } } />
}

Caret.propTypes = {
    column: PropTypes.string.isRequired,
    dir: PropTypes.array.isRequired
}

export default Caret
