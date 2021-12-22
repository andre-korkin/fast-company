import React from 'react'
import PropTypes from 'prop-types'


const UsersTableHead = ({ columns, selectedSort, onSort }) => {
    return (
        <tr>
            {Object.keys(columns).map((column) => {
                return (
                  <th
                    key={column}
                    onClick={
                        columns[column].iter
                          ? () => handleClick(columns[column].iter)
                          : null
                    }
                    {...{ role: columns[column].iter && "button" }}
                    scope="col"
                  >
                      {columns[column].name ? columns[column].name  : ''}{' '}
                      {selectedSort.iter === columns[column].iter && (
                        <i className={`bi bi-caret-${selectedSort.icon}-fill`}></i>
                      )}
                  </th>
                )
            })}
        </tr>
    )

    function handleClick(iter) {
        onSort(iter);
    }
}

UsersTableHead.propTypes = {
    columns: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UsersTableHead
