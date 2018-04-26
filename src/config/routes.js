import React from 'react'
import {BrowserRouter as Router, Route,  Link } from 'react-router-dom'

//Scenes
import Login from '../scenes/Login'
import App from '../App'

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={App} />        
            <Route path="/login" component={Login} />        
        </div> 
    </Router>
)
export default routes;

