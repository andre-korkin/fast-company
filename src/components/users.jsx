import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import API from '../api'
import TopMessage from './topMessage'
import UsersTable from './usersTable'
import _ from 'lodash'


const Users = ({ users, ...rest }) => {
    const pageSize = 2  // количество юзеров на странице

    const [profs, setProfs] = useState()  // следим за списком профессий
    const [profSelected, setProfSelected] = useState()  // следим за выбранной профессией

    useEffect(() => API.professions.fetchAll().then(data => setProfs(data)), [])
    useEffect(() => setCurrentPage(1), [profSelected])

    const [currentPage, setCurrentPage] = useState(1)  // следим за выбранной страницей
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

    const usersFilterProf = profSelected ? users.filter(user => user.profession._id === profSelected._id) : users

    const usersSorted = _.orderBy(usersFilterProf, [sortBy.iter], [sortBy.order])

    const count = usersSorted.length

    const beginIndexUsers = (currentPage - 1) * pageSize  // начальный индекс юзера текущей страницы
    const lastIndexUsers = beginIndexUsers + pageSize  // конечный индекс юзера текущей страницы + 1
    const currentUsers = usersSorted.slice(beginIndexUsers, lastIndexUsers)  // массив юзеров (вырезка) для текущей страницы

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

                <UsersTable users = {currentUsers} onSort = {handleSort} {...rest} />

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

    function handleSort (item) {
        if (sortBy.iter === item) {
            sortBy.order === 'asc' ? setSortBy({ iter: item, order: 'desc' }) : setSortBy({ iter: item, order: 'asc' })
        }
        else {
            setSortBy({ iter: item, order: 'asc' })
        }
    }

    function handlePageChange (pageIndex) {
        setCurrentPage(pageIndex)
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
