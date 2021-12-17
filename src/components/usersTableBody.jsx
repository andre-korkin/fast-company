import React, { useState } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Qualities from './qualities'
import Favorite from './favorite'


const UsersTableBody = ({ columns, users }) => {
    const [status, setStatus] = useState(false)

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
                return <Favorite status = {status} onToggleFavorite = {handleFavorite} />
            case 'Delete':
                return 'del'
        }
    }

    function handleFavorite (statusValue) {
        setStatus(!statusValue)
    }
}

UsersTableBody.propTypes = {
    columns: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
}

export default UsersTableBody
