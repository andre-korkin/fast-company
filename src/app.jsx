import React, { useState, useEffect } from 'react'
import API from './api'
import Users from './components/users'


const App = () => {
    const [users, setUsers] = useState()
    useEffect(() => API.users.fetchAll().then(data => setUsers(data)), [])

    return users ? <Users users = {users} onDelete = {handleDelete} /> : null


    function handleDelete (id) {
        setUsers(users.filter(user => user._id !== id))
        users.length === 1 ? document.querySelector('.table').style.opacity = '0' : document.querySelector('.table').style.opacity = '1'
    }
}

export default App
