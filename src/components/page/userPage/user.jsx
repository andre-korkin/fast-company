import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../../../api'
import Qualities from '../../ui/qualities'
import Favorite from '../../common/favorite'
import PropTypes from 'prop-types'


const User = ({ id }) => {
    const history = useHistory()

    const [user, setUser] = useState()
    useEffect(() => API.users.getById(id).then(data => setUser(data)), [])

    const userData = user && (
        <>
            <h1>{user.name} <Favorite user={user} onFavorite={handleFavorite} /></h1>
            <br />
            <h4>{`Email: ${user.email}`}</h4>
            <h4>{`Пол: ${user.sex}`}</h4>
            <h4>{`Профессия: ${user.profession.name}`}</h4>
            <div style={{ margin: '20px 0' }}><Qualities qualities={user.qualities} /></div>
            <h4>{`Завершенных свиданий: ${user.completedMeetings}`}</h4>
            <h4>{`Рейтинг: ${user.rate}`}</h4>
            <br />
            <button className='btn btn-warning m-1' onClick={handleEdit}>Редактировать</button>
            <button className='btn btn-danger m-1' onClick={handleDelete}>Удалить</button>
        </>
    )

    return user ? userData : 'Loading data...'


    function handleFavorite (id) {
        const newArray = JSON.parse(localStorage.getItem('users')).map(user => {
            if (user._id === id) {
                const currentUser = { ...user, favorite: !user.favorite }
                setUser(currentUser)
                return currentUser
            }
            return user
        })
        localStorage.setItem('users', JSON.stringify(newArray))
    }

    function handleEdit () {
        history.push(`/users/${user._id}/edit`)
    }

    function handleDelete () {
        const id = user._id
        const newArray = JSON.parse(localStorage.getItem('users')).filter(user => user._id !== id)
        localStorage.setItem('users', JSON.stringify(newArray))
        history.push('/users')
    }
}

User.propTypes = {
    id: PropTypes.string.isRequired
}

export default User
