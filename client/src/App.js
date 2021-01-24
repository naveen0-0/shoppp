import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

import NavBar from './components/NavBar';
export default function App() {
    return (
        <Router>
            <NavBar />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </Router>
    )
}
