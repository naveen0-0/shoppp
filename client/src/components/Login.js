import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';



export default function Login() {

    const { loggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const LoginSubmit = async e => {
        e.preventDefault();
        let { data } = await axios.post("/login", { username, password });
        setMsg(data.msg);
        dispatch({ type: "LOGGEDIN", payload: { username: data.username, email: data.email, loggedIn: data.loggedIn } });
    }

    if (loggedIn) return <Redirect to="/" />

    return (
        <Fragment>
            <div className="loginformtitle">Login</div>
            {msg && <div className="loginmsg">{msg}</div>}
            <form onSubmit={LoginSubmit} className="loginform">

                <input
                    type="text"
                    className="loginusername"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    placeholder="Enter a username"
                />


                <input
                    type="password"
                    className="loginpassword"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder="Enter a password"
                />



                <input type="submit" value="Login" className="loginsubmit" />
            </form>
        </Fragment>
    )
}
