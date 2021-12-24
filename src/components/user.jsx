import React from 'react'
import { useHistory } from 'react-router-dom'
import Qualities from './qualities'
import PropTypes from 'prop-types'


const User = ({ user }) => {
    const history = useHistory()

    return (
        <>
            <h1>{user.name}</h1>
            <h3>{`Профессия: ${user.profession.name}`}</h3>
            <Qualities qualities={user.qualities} />
            <h3>{`Завершенных свиданий: ${user.completedMeetings}`}</h3>
            <h3>{`Рейтинг: ${user.rate}`}</h3>
            <br />
            <button className='btn btn-secondary m-2' onClick={handleSave}>Весь список</button>
        </>
    )


    function handleSave () {
        history.push('/users')
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User
