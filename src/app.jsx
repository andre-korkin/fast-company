import React, {useState} from 'react'
import TopMessage from './components/topMessage'
import API from './api'
import Users from './components/users'


const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    return (
        <>
            <TopMessage value = {users.length} />
            <Users users = {users} onDelete = {handleDelete} />
        </>
    )


    function handleDelete(id) {
        setUsers(users.filter(user => user._id !== id))
    }
}

export default App