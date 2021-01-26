import React, { Fragment } from 'react';
import userdp from "../images/userdp.png";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function User() {

    const { username, email, loggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const LogoutButton = async () => {
        let { data } = await axios.post('/logout');
        dispatch({ type: "LOGGEDOUT", payload: data })
    }


    if (!loggedIn) return <Redirect to="/" />

    return (
        <Fragment>
            <div className="userdpcontainer"><img src={userdp} alt="UserDP" className="userdp" /></div>
            <div className="username">{username}</div>
            <div className="email">{email}</div>
            <button className="logout" onClick={LogoutButton}>Logout</button>
        </Fragment>
    )
}
