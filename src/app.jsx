import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './components/home'
import Users from './components/users'
import LogIn from './components/login'
import Error404 from './components/error404'


const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/users/:userId?' component={Users} />
                <Route path='/login' component={LogIn} />
                <Route path='/404' component={Error404} />

                <Redirect to='/404' />
            </Switch>
        </>
    )
}

export default App
