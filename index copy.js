import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Halloworld from './page/halloworld';
import Dashboard from './page/Dashboard';
import login from './page/login';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './index.css';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <link to="/">hello world</link>
                </li>
                <li>
                    <link to="/dashboard">dashboard</link>
                </li>
                <li>
                    <link to="/login">login</link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Halloworld}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={login}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(
    routing,
 document.getElementById('root')
);