import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Login from '../login/Login';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
        </Switch>
    );
}
 
export default MainRoutes;