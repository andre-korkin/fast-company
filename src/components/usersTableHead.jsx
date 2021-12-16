import React from 'react'
import PropTypes from 'prop-types'


const UsersTableHead = ({ columns, onSort }) => {
    return (
        <tr>
            {columns.map((column, index) => {
                return (
                    <th key={index} onClick={column.iter ? () => onSort(column.iter) : null} role={column.iter ? 'button' : ''} scope="col">
                        {column.name ? column.name : ''}
                    </th>
                )
            })}
        </tr>
    )
}

UsersTableHead.propTypes = {
    columns: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UsersTableHead
