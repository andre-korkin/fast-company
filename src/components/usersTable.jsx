import React from 'react'
import PropTypes from 'prop-types'
import UsersTableHead from './usersTableHead'
import UsersTableBody from './usersTableBody'
import Favorite from './favorite';
import Qualities from './qualities';


const UsersTable = ({ users, onSort, selectedSort, onFavorite, ...rest }) => {
    const columns = {
      name: {
        name: 'Имя', iter: 'name'
      },
      qualities: {
        name: 'Качества',
        component:
          (user) => (
            <Qualities {...user} />
          )
      },
      professions: {
        name: 'Профессия', iter:
          'profession.name'
      },
      completedMeetings: {
        name: 'Встретился, раз', iter:
          'completedMeetings'
      },
      rate: {
        name: 'Оценка', iter:
          'rate'
      },
      favorite: {
        name: 'Избранное',
        iter:
          'favorite',
        component:
          (user) => (
            <Favorite userId={user._id} status={user.favorite} onFavorite={onFavorite} />
          )
      },
      delete: {
        component: (user) => (
          <button type='button' className='btn btn-danger' onClick={() => rest.onDelete(user._id)}>Удалить</button>
        )
      }
    }

    return (
        <table className="table table-hover">
            <thead>
                <UsersTableHead columns={columns} onSort={onSort} selectedSort={selectedSort} />
            </thead>
            <tbody>
                <UsersTableBody columns={columns} users={users} {...rest} />
            </tbody>
        </table>
    )
}

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UsersTable
