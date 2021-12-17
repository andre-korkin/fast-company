import React, { useState } from 'react'
import Qualities from './qualities'
import Favorite from './favorite'
import PropTypes from 'prop-types'


const User = (props) => {
    const [status, setStatus] = useState(false)

    return (
        <tr id = {props._id}>
            <td>{props.name}</td>
            <td>{<Qualities {...props} />}</td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td>{<Favorite status = {status} onToggleFavorite = {handleFavorite} />}</td>
            <td><button type='button' className='btn btn-danger' onClick={() => props.onDelete(props._id)}>Удалить</button></td>
        </tr>
    )


    function handleFavorite (statusValue) {
        setStatus(!statusValue)
    }
}

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default User
