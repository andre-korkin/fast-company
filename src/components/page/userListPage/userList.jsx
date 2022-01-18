import React, { useState, useEffect } from 'react'
import Pagination from '../../common/pagination'
import GroupList from '../../common/groupList'
import API from '../../../api'
import TopMessage from '../../ui/topMessage'
import UsersTable from '../../ui/usersTable'
import _ from 'lodash'


const UserList = () => {
    const [users, setUsers] = useState()
    useEffect(() => API.users.fetchAll().then(data => setUsers(data)), [])

    const pageSize = 2  // количество юзеров на странице

    const [profs, setProfs] = useState()  // следим за списком профессий
    const [profSelected, setProfSelected] = useState()  // следим за выбранной профессией

    const [search, setSearch] = useState('')  // следим за полем поиска

    useEffect(() => API.professions.fetchAll().then(data => setProfs(data)), [])
    useEffect(() => setCurrentPage(1), [profSelected])
    useEffect(() => setCurrentPage(1), [search])

    const [currentPage, setCurrentPage] = useState(1)  // следим за выбранной страницей
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

    const usersFilterProf = users && profSelected ? users.filter(user => user.profession._id === profSelected._id) : users
    const usersFilterSearch = users && search ? users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase())) : users
    const usersFilter = users && usersFilterProf.length < usersFilterSearch.length ? usersFilterProf : usersFilterSearch
    const usersSorted = _.orderBy(usersFilter, [sortBy.iter], [sortBy.order])

    const count = usersSorted.length

    const beginIndexUsers = (currentPage - 1) * pageSize  // начальный индекс юзера текущей страницы
    const lastIndexUsers = beginIndexUsers + pageSize  // конечный индекс юзера текущей страницы + 1
    const currentUsers = usersSorted.slice(beginIndexUsers, lastIndexUsers)  // массив юзеров (вырезка) для текущей страницы

    const usersData = users && (
        <div className='d-flex'>
            {profs && (
                <div className='d-flex flex-column m-3'>
                    <GroupList items={profs} itemSelected={profSelected} onItemSelect={handleProfSelect} />
                    <button className='btn btn-secondary m-2' onClick={handleRefresh}>Сброс</button>
                </div>
            )}

            <div className='d-flex flex-column m-3'>
                {users && <TopMessage value={count} />}

                <input type='text' placeholder='Поиск...' value={search} onChange={handleSearch} className='form-control m-2 mb-4' />

                {users && <UsersTable users={currentUsers} onSort={handleSort} onFavorite={handleFavorite} onDelete={handleDelete} />}

                <div className='d-flex justify-content-center m-3'>
                    <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>
            </div>

        </div>
    )

    return users ? usersData : 'Loading data...'


    function handleProfSelect (prof) {
        setSearch('')
        setProfSelected(prof)
    }

    function handleRefresh () {
        setProfSelected(undefined)
    }

    function handleSearch (event) {
        setProfSelected(undefined)
        setSearch(event.target.value)
    }

    function handleSort (item) {
        setCurrentPage(1)
        if (sortBy.iter === item) {
            sortBy.order === 'asc' ? setSortBy({ iter: item, order: 'desc' }) : setSortBy({ iter: item, order: 'asc' })
        }
        else {
            setSortBy({ iter: item, order: 'asc' })
        }
    }

    function handleFavorite (id) {
        const newArray = users.map(user => {
            if (user._id === id) {
                return { ...user, favorite: !user.favorite }
            }
            return user
        })
        localStorage.setItem('users', JSON.stringify(newArray))
        setUsers(newArray)
    }

    function handlePageChange (pageIndex) {
        setCurrentPage(pageIndex)
    }

    function handleDelete (id) {
        const newArray = users.filter(user => user._id !== id)
        localStorage.setItem('users', JSON.stringify(newArray))
        setUsers(newArray)
        users.length === 1 ? document.querySelector('.table').style.opacity = '0' : document.querySelector('.table').style.opacity = '1'
    }
}

export default UserList
