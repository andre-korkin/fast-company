import React from 'react'
import PropTypes from 'prop-types'


const Favorite = ({ userId, status, onFavorite }) => {
    return (
        <button className="btn btn-light" onClick={() => onFavorite(userId)}>
            <i className={status ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
        </button>
    )
}

Favorite.propTypes = {
    userId: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onFavorite: PropTypes.func.isRequired
}

export default Favorite
