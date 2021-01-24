import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { getUser } from './utils/utils';


export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        getUser()
            .then(data => {
                dispatch({ type: "LOGGEDIN", payload: { username: data.username, email: data.email, loggedIn: data.loggedIn } })
            })
            .catch((err) => console.log("Error : ", err))
    }, [dispatch]);

    return (
        <Router>
            <NavBar />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </Router>
    )
}
