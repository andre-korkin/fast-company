import React from 'react'
import PropTypes from 'prop-types'
import UsersTableHead from './usersTableHead'
import UsersTableBody from './usersTableBody'


const UsersTable = ({ users, onSort, ...rest }) => {
    const cols = [
        { iter: 'name', name: 'Имя' },
        { name: 'Качества' },
        { iter: 'profession.name', name: 'Профессия' },
        { iter: 'completedMeetings', name: 'Встретился, раз' },
        { iter: 'rate', name: 'Оценка' },
        { iter: 'favorites', name: 'Избранное' },
        {}
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
