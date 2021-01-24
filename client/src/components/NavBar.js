import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userpng from '../images/user.png';
import shoppingcartimg from '../images/shoppingcart2.png';

export default function NavBar() {

    const { loggedIn } = useSelector(state => state.user);

    return (
        <div className="navbar">
            <Link className="navbartitle" to="/">Shoppp</Link>


            {loggedIn ? (
                <div className="cartanduser">
                    <Link className="user" to="/user"><img src={userpng} alt="User" className="userimg" /></Link>
                    <Link className="cart" to="/cart"><img src={shoppingcartimg} alt="User" className="cartimg" /></Link>
                </div>
            ) : (
                    <div className="navbarlinks">
                        <Link to="/signup" className="navbarlink">signup</Link>
                        <Link to="/login" className="navbarlink">login</Link>
                    </div>
                )}
        </div>
    )
}
