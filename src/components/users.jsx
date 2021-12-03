import React, {useState} from 'react'
import API from '../api'


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
                    {renderAllUsers()}
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
    
    function renderAllUsers() {
        return (
            <>
                {users.map(user => renderUser(user))}
            </>
        )
    }
    
    function renderUser(user) {
        return (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{renderQualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><button type="button" className="btn btn-danger" onClick={(event) => handleDelete(event)}>Удалить</button></td>
            </tr>
        )
    }
    
    function renderQualities(qualities) {
        return (
            <>
                {qualities.map(item => {
                    const bg = 'badge bg-' + item.color + ' m-2'
                    return <span key={item._id} className={bg}>{item.name}</span>
                })}
            </>
        )
    }
    
    function handleDelete(event) {
        event.target.closest('tr').remove()
        setCounter(count - 1)
    }
}

export default Users