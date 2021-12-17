import React from 'react'
import PropTypes from 'prop-types'


const Qualities = ({ qualities }) => {
    return (
        <>
            {qualities.map(item => {
                const bg = 'badge bg-' + item.color + ' m-2'
                return <span key={item._id} className={bg}>{item.name}</span>
            })}
        </>
    )
}

Qualities.propTypes = {
    qualities: PropTypes.array.isRequired
}

export default Qualities
