import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Caret from './caret'


const UsersTableHead = ({ columns, onSort }) => {
    const dirInit = {}  // Инициализируем объект стрелок по каждой колонке, которая нуждается в сортировке
    for (const column of columns) {
        if (column.iter) {
            if (column.iter === 'name') {  // У первой колонки по умолчанию стрелка видна
                dirInit[column.iter] = ['up', '1']
            }
            else {
                dirInit[column.iter] = ['up', '0']
            }
        }
    }
    const [direction] = useState(dirInit)

    return (
        <tr>
            {columns.map((column, index) => {
                return (
                    <th key={index} onClick={column.iter ? () => handleClick(column.iter) : null} role={column.iter ? 'button' : ''} scope="col">
                        {column.name ? column.name : ''}
                        {column.iter ? <Caret column={column.iter} dir={direction[column.iter]} /> : ''}
                    </th>
                )
            })}
        </tr>
    )


    function handleClick (iter) {
        onSort(iter)
        Object.keys(direction).forEach(col => {
            if (col !== iter) {
                direction[col] = ['up', '0']
            }
        })

        if (direction[iter][1] === '0') {
            direction[iter] = ['up', '1']
        }
        else {
            if (direction[iter][0] === 'up') {
                direction[iter][0] = 'down'
            }
            else {
                direction[iter][0] = 'up'
            }
        }
    }
}

UsersTableHead.propTypes = {
    columns: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UsersTableHead
