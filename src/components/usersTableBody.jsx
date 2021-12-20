import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Qualities from './qualities'
import Favorite from './favorite'


const UsersTableBody = ({ columns, users, ...rest }) => {
    return users.map(user => (
        <tr key={user._id}>
            {columns.map((column, index) => <td key={ index }>{_.get(user, column.iter) || getComponent(user, column.component) }</td>)}
        </tr>
    ))


    function getComponent (user, component) {
        switch (component) {
            case 'Qualities':
                return <Qualities { ...user } />
            case 'Favorite':
                return <Favorite userId={user._id} status={rest.status[user._id]} onFavorite={rest.onFavorite} />
            case 'Delete':
                return <button type='button' className='btn btn-danger' onClick={() => rest.onDelete(user._id)}>Удалить</button>
        }
    }
}

UsersTableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
}

export default UsersTableBody
