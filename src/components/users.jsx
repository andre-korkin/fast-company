import React, { useState } from 'react'
import User from './user'
import Pagination from './pagination'


const Users = ({users, ...rest}) => {
    const count = users.length
    const pageSize = 4  // количество юзеров на странице

    const [currentPage, setCurrentPage] = useState(1)

    let beginIndexUsers = (currentPage - 1) * pageSize  // начальный индекс юзера текущей страницы
    let lastIndexUsers = beginIndexUsers + pageSize  // конечный индекс юзера текущей страницы + 1
    let currentUsers = users.slice(beginIndexUsers, lastIndexUsers)  // массив юзеров (вырезка) для текущей страницы

    return (
        <>
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
            <Pagination itemCount = {count} pageSize = {pageSize} currentPage = {currentPage} onPageChange = {handlePageChange} />
        </>
    )


    function handlePageChange(pageIndex) {
        setCurrentPage(pageIndex)
    }
}

export default Users