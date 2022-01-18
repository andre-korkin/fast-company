import React from 'react'
import PropTypes from 'prop-types'


const Favorite = ({ user, onFavorite }) => {
    return (
        <button className="btn btn-light" onClick={() => onFavorite(user._id)}>
            <i className={user.favorite ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
        </button>
    )
}

Favorite.propTypes = {
    user: PropTypes.object.isRequired,
    onFavorite: PropTypes.func.isRequired
}

export default Favorite
