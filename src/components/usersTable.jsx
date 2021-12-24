import React from 'react'
import PropTypes from 'prop-types'
import UsersTableHead from './usersTableHead'
import UsersTableBody from './usersTableBody'


const UsersTable = ({ users, onSort, ...rest }) => {
    const cols = [
        { name: 'Имя', iter: 'name', component: 'UserLink' },
        { name: 'Качества', component: 'Qualities' },
        { name: 'Профессия', iter: 'profession.name' },
        { name: 'Встретился, раз', iter: 'completedMeetings' },
        { name: 'Оценка', iter: 'rate' },
        { name: 'Избранное', iter: 'favorite', component: 'Favorite' },
        { component: 'Delete' }
    ]

    return (
        <table className="table table-hover">
            <thead>
                <UsersTableHead columns={cols} onSort={onSort} />
            </thead>
            <tbody>
                <UsersTableBody columns={cols} users={users} {...rest} />
            </tbody>
        </table>
    )
}

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UsersTable
