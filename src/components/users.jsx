import React, {useState} from 'react'
import API from '../api'
import TopMessage from './topMessage'
import User from './user'


const Users = () => {
    const users = API.users.fetchAll()
    const [count, setCounter] = useState(users.length)

    return (
        <>
            <TopMessage value = {count} />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <User key = {user._id} onDelete = {handleDelete} {...user} />)}
                </tbody>
            </table>
        </>
    )

    
    function handleDelete(id) {
        document.getElementById(id).remove()
        setCounter(count - 1)
    }
}

export default Users