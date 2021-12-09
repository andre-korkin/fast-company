import React from 'react'
import User from './user'


const Users = ({users}) => {
    return (
        <>
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
    }
}

export default Users