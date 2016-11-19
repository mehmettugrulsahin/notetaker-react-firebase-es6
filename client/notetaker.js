import React from 'react';
import {render} from 'react-dom';

import Home from './components/Home';
import Main from './components/Main';
import Profile from './components/Profile';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="profile/:username" component={Profile} />
            <IndexRoute component={Home}></IndexRoute>
        </Route>
    </Router>   
)

render(router, document.getElementById('root'));
