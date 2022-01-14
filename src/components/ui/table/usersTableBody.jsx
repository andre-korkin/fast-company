import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import UserLink from '../userLink'
import Qualities from '../qualities'
import Favorite from '../../common/favorite'


const UsersTableBody = ({ columns, users, ...rest }) => {
    return users.map(user => (
        <tr key={user._id}>
            {columns.map((column, index) => <td key={ index }>{column.component ? getComponent(user, column.component) : _.get(user, column.iter)}</td>)}
        </tr>
    ))


    function getComponent (user, component) {
        switch (component) {
            case 'UserLink':
                return <UserLink user={user} />
            case 'Qualities':
                return <Qualities { ...user } />
            case 'Favorite':
                return <Favorite user={user} onFavorite={rest.onFavorite} />
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
