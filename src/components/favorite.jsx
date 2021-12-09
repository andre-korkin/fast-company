import React from 'react'


const Favorite = ({status, onToggleFavorite}) => {
    return (
        <button className="btn btn-light" onClick={() => onToggleFavorite(status)}>
            <i className={status ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
        </button>
    )
}

export default Favorite