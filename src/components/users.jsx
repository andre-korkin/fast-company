import React from 'react'
import API from '../api'


const Users = () => {
    const users = API.users.fetchAll()
    return renderTable(users)
}

export default Users


function renderTable(users) {
    return (
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
                {renderAllUsers(users)}
            </tbody>
        </table>
    )
}

function renderAllUsers(users) {
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
            <td></td>
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