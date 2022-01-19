import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/navbar'
import Home from './layout/home'
import Users from './layout/users'
import LogIn from './layout/login'
import Error404 from './components/page/error404'


const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/users/:userId?/:userEdit?' component={Users} />
                <Route path='/login/:reg?' component={LogIn} />
                <Route path='/404' component={Error404} />

                <Redirect to='/404' />
            </Switch>
        </>
    )
}

export default App
