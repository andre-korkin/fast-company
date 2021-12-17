import React, { useState, useEffect } from 'react'
import API from './api'
import Users from './components/users'


const App = () => {
    const [users, setUsers] = useState()
    useEffect(() => API.users.fetchAll().then(data => setUsers(data)), [])

    return users ? <Users users = {users} onDelete = {handleDelete} /> : null


    function handleDelete (id) {
        setUsers(users.filter(user => user._id !== id))
    }
}

export default App
