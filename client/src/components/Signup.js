import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';



export default function Signup() {

    const { loggedIn } = useSelector(state => state.user);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState("")

    const SignupSubmit = async e => {
        e.preventDefault();
        let { data } = await axios.post('/signup', { username, email, password, confirmPassword })
        setMsg(data.msg);
    }

    if (loggedIn) return <Redirect to="/" />

    return (
        <div className="signupcontainer">
            <div className="signupformtitle">Sign Up</div>
            {msg && <div className="signupmsg">{msg}</div>}
            <form onSubmit={SignupSubmit} className="signupform">

                <input
                    type="text"
                    className="signupusername"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    placeholder="Enter a username"
                />

                <input
                    type="email"
                    className="signupemail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                />

                <input
                    type="password"
                    className="signuppassword"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder="Enter a password"
                />

                <input
                    type="password"
                    className="signupconfirmpassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm the password"
                />

                <input type="submit" value="Sign Up" className="signupsubmit" />
            </form>
        </div>
    )
}
