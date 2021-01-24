import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userpng from '../images/user.png';

export default function NavBar() {

    const { loggedIn } = useSelector(state => state.user);

    return (
        <div className="navbar">
            <Link className="navbartitle" to="/">Shoppp</Link>


            {loggedIn ? (
                <Link className="navbarlink" to="/user"><img src={userpng} alt="User" className="navbaruserimg" /></Link>
            ) : (
                    <div className="navbarlinks">
                        <Link to="/signup" className="navbarlink">signup</Link>
                        <Link to="/login" className="navbarlink">login</Link>
                    </div>
                )}
        </div>
    )
}
