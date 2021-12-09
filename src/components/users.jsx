import React, {useState} from 'react'
import API from '../api'
import User from './user'


const Users = () => {
    const users = API.users.fetchAll()
    const [count, setCounter] = useState(users.length)

    return (
        <>
            {createMessage()}
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


    function createMessage() {
        let message = ''
        let bg = 'badge bg-primary m-2'
        if(count === 0) {
            message = 'Никто с тобой не тусанет'
            bg = 'badge bg-danger m-2'
            document.querySelector('.table').style.display = 'none'
        }
        else if(count === 1) {
            message = '1 человек тусанет с тобой сегодня'
        }
        else if(count>1 && count<5) {
            message = count + ' человека тусанут с тобой сегодня'
        }
        else {
            message = count + ' человек тусанут с тобой сегодня'
        }

        return <h2><span className={bg}>{message}</span></h2>
    }

    
    function handleDelete(id) {
        document.getElementById(id).remove()
        setCounter(count - 1)
    }
}

export default Users