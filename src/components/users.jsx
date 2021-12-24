import React from 'react'
import UserList from './userList'
import User from './user'
import { useParams } from 'react-router-dom'


const Users = () => {
    const params = useParams()
    const { userId } = params

    return userId ? <User id={userId} /> : <UserList />
}

export default Users
