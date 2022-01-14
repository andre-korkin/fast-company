import React from 'react'
import UserList from '../components/page/userListPage'
import User from '../components/page/userPage'
import { useParams } from 'react-router-dom'


const Users = () => {
    const params = useParams()
    const { userId } = params

    return userId ? <User id={userId} /> : <UserList />
}

export default Users
