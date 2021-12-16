import React from 'react'
import PropTypes from 'prop-types'


const UsersTableBody = ({ columns, users }) => {
    return users.map(user => (
        <tr key={user._id}>
            {columns.map((column, index) => <td key={ index }>{user[column.iter]}</td>)}
        </tr>
    ))
}

UsersTableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
}

export default UsersTableBody
