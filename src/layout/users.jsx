import React from 'react'
import UserList from '../components/page/userListPage'
import User from '../components/page/userPage'
import { useParams } from 'react-router-dom'
import UserEditForm from '../components/page/userEditForm'


const Users = () => {
    const params = useParams()
    const { userId, userEdit } = params

    return userEdit === 'edit' ? <UserEditForm id={userId} /> : userId ? <User id={userId} /> : <UserList />
}

export default Users
