import React from 'react'
import PropTypes from 'prop-types'


const Favorite = ({ status, onToggleFavorite }) => {
    return (
        <button className="btn btn-light" onClick={() => onToggleFavorite(status)}>
            <i className={status ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
        </button>
    )
}

Favorite.propTypes = {
    status: PropTypes.bool.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
}

export default Favorite
