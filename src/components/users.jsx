import React, { useState, useEffect } from 'react'
import User from './user'
import Pagination from './pagination'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import API from '../api'
import TopMessage from './topMessage'


const Users = ({ users, ...rest }) => {
    const pageSize = 2  // количество юзеров на странице

    const [profs, setProfs] = useState()  // следим за списком профессий
    const [profSelected, setProfSelected] = useState()  // следим за выбранной профессией

    useEffect(() => API.professions.fetchAll().then(data => setProfs(data)), [])
    useEffect(() => setCurrentPage(1), [profSelected])

    const [currentPage, setCurrentPage] = useState(1)  // следим за выбранной страницей

    const usersFilterProf = profSelected ? users.filter(user => user.profession._id === profSelected._id) : users
    const count = usersFilterProf.length

    const beginIndexUsers = (currentPage - 1) * pageSize  // начальный индекс юзера текущей страницы
    const lastIndexUsers = beginIndexUsers + pageSize  // конечный индекс юзера текущей страницы + 1
    const currentUsers = usersFilterProf.slice(beginIndexUsers, lastIndexUsers)  // массив юзеров (вырезка) для текущей страницы

    return (
        <div className='d-flex'>
            {profs && (
                <div className='d-flex flex-column m-3'>
                    <GroupList items = {profs} itemSelected = {profSelected} onItemSelect = {handleProfSelect} />
                    <button className='btn btn-secondary m-2' onClick={handleRefresh}>Сброс</button>
                </div>
            )}

            <div className='d-flex flex-column m-3'>
                <TopMessage value = {count} />

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map(user => <User key = {user._id} onDelete = {rest.onDelete} {...user} />)}
                    </tbody>
                </table>

                <div className='d-flex justify-content-center m-3'>
                    <Pagination itemCount = {count} pageSize = {pageSize} currentPage = {currentPage} onPageChange = {handlePageChange} />
                </div>
            </div>

        </div>
    )


    function handleProfSelect (prof) {
        setProfSelected(prof)
    }

    function handleRefresh () {
        setProfSelected(undefined)
    }

    function handlePageChange (pageIndex) {
        setCurrentPage(pageIndex)
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
