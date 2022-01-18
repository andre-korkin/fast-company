import React from 'react'
import PropTypes from 'prop-types'


const GroupList = ({ items, valueProp, contentProp, onItemSelect, itemSelected }) => {
    return (
        <ul className='list-group'>
            {Object.keys(items).map(item => {
                return <li key={items[item][valueProp]}
                    className={items[item] === itemSelected ? 'list-group-item active' : 'list-group-item'}
                    onClick={() => onItemSelect(items[item])} role='button'>
                    {items[item][contentProp]}
                </li>
            })}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProp: '_id',
    contentProp: 'name'
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    itemSelected: PropTypes.object
}

export default GroupList
