import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Login from './components/Login';
import HomePage from './components/HomePage';
import User from './components/User';
import Cart from './components/Cart';

import { getUser, gettingCartProducts } from './utils/utils';



export default function App() {

    const dispatch = useDispatch();
    const { username } = useSelector(state => state.user);

    useEffect(() => {
        getUser()
            .then(data => { dispatch({ type: "LOGGEDIN", payload: { username: data.username, email: data.email, loggedIn: data.loggedIn } }) })
            .catch(() => console.log("User Error"))


        gettingCartProducts(username)
            .then(data => { dispatch({ type: "UPDATECART", payload: data }) })
            .catch(() => console.log("Cart Error"))

    }, [dispatch, username]);

    return (
        <Router>
            <NavBar />
            <Route path="/" component={HomePage} exact />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/cart" component={Cart} />
        </Router>
    )
}
