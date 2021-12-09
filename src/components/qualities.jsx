import React from 'react'


const Qualities = ({qualities}) => {
    return (
        <>
            {qualities.map(item => {
                const bg = 'badge bg-' + item.color + ' m-2'
                return <span key={item._id} className={bg}>{item.name}</span>
            })}
        </>
    )
}

export default Qualities