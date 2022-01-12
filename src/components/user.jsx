import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../api'
import Qualities from './qualities'
import PropTypes from 'prop-types'


const User = ({ id }) => {
    const history = useHistory()

    const [user, setUser] = useState()
    useEffect(() => API.users.getById(id).then(data => setUser(data)), [])

    const userData = user && (
        <>
            <h1>{user.name}</h1><br />
            <h4>{`Профессия: ${user.profession.name}`}</h4>
            <div style={{ margin: '20px 0' }}><Qualities qualities={user.qualities} /></div>
            <h4>{`Завершенных свиданий: ${user.completedMeetings}`}</h4>
            <h4>{`Рейтинг: ${user.rate}`}</h4>
            <br />
            <button className='btn btn-primary m-1' onClick={handleSave}>Весь список</button>
        </>
    )

    return user ? userData : 'Loading data...'


    function handleSave () {
        history.push('/users')
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired
}

export default User
