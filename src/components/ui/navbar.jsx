import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <ul className='nav'>
            <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={event => handleClick(event)}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/users' onClick={event => handleClick(event)}>Users</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/login' onClick={event => handleClick(event)}>Login</Link>
            </li>
        </ul>
    )


    function handleClick (event) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.background = '#fff'
            link.style.color = '#0d6efd'
        })
        event.target.style.background = '#5c636a'
        event.target.style.color = '#fff'
    }
}

export default NavBar
