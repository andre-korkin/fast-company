import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'


const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemCount / pageSize)
    if (pageCount === 1) return null

    const pages = _.range(1, pageCount + 1)

    return <nav>
        <ul className='pagination justify-content-center'>
            {pages.map(page => <li className={'page-item' + (page === currentPage ? ' active' : false)} key={'page_' + page}>
                <button className='page-link' onClick={() => onPageChange(page)}>{page}</button>
            </li>)}
        </ul>
    </nav>
}

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination
