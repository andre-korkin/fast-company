import React from 'react'


const TopMessage = ({value}) => {
    let message = ''
    let bg = 'badge bg-primary m-2'
    if(value === 0) {
        message = 'Никто с тобой не тусанет'
        bg = 'badge bg-danger m-2'
        document.querySelector('.table').style.display = 'none'
    }
    else if(value === 1) {
        message = '1 человек тусанет с тобой сегодня'
    }
    else if(value>1 && value<5) {
        message = value + ' человека тусанут с тобой сегодня'
    }
    else {
        message = value + ' человек тусанут с тобой сегодня'
    }

    return <h2><span className={bg}>{message}</span></h2>
}

export default TopMessage