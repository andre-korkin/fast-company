import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const UserLink = ({ user }) => {
    return <Link className='btn' style={{ color: '#0d6efd' }} to={`/users/${user._id}`}>{user.name}</Link>
}

UserLink.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserLink
