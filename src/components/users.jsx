import React, { useState, useEffect } from 'react'
import Pagination from './pagination'
import GroupList from './groupList'
import API from '../api'
import TopMessage from './topMessage'
import UsersTable from './usersTable'
import _ from 'lodash'


const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => API.users.fetchAll().then(data => setUsers(data)), [])

    const pageSize = 2  // количество юзеров на странице

    const [profs, setProfs] = useState()  // следим за списком профессий
    const [profSelected, setProfSelected] = useState()  // следим за выбранной профессией

    useEffect(() => API.professions.fetchAll().then(data => setProfs(data)), [])
    useEffect(() => setCurrentPage(1), [profSelected])

    const [currentPage, setCurrentPage] = useState(1)  // следим за выбранной страницей
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

    const usersFilterProf = users && profSelected ? users.filter(user => user.profession._id === profSelected._id) : users
    const usersSorted = _.orderBy(usersFilterProf, [sortBy.iter], [sortBy.order])

    const count = usersSorted.length

    const beginIndexUsers = (currentPage - 1) * pageSize  // начальный индекс юзера текущей страницы
    const lastIndexUsers = beginIndexUsers + pageSize  // конечный индекс юзера текущей страницы + 1
    const currentUsers = usersSorted.slice(beginIndexUsers, lastIndexUsers)  // массив юзеров (вырезка) для текущей страницы

    const statusInit = {}  // Инициализируем объект статусов в избранном/нет для каждого user._id
    if (users) {
        const idList = users.map(user => user._id)
        for (const id of idList) {
            statusInit[id] = false
        }
    }
    const [status, setStatus] = useState(statusInit)

    return (
        <div className='d-flex'>
            {profs && (
                <div className='d-flex flex-column m-3'>
                    <GroupList items={profs} itemSelected={profSelected} onItemSelect={handleProfSelect} />
                    <button className='btn btn-secondary m-2' onClick={handleRefresh}>Сброс</button>
                </div>
            )}

            <div className='d-flex flex-column m-3'>
                {users && <TopMessage value={count} />}

                {users && <UsersTable users={currentUsers} onSort={handleSort} status={status} onFavorite={handleFavorite} onDelete={handleDelete} />}

                <div className='d-flex justify-content-center m-3'>
                    <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
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

    function handleFavorite (id) {
        const newStatus = { ...status }
        newStatus[id] = !status[id]
        setStatus(newStatus)
    }

    function handlePageChange (pageIndex) {
        setCurrentPage(pageIndex)
    }

    function handleDelete (id) {
        setUsers(users.filter(user => user._id !== id))
        users.length === 1 ? document.querySelector('.table').style.opacity = '0' : document.querySelector('.table').style.opacity = '1'
    }
}

export default Users
