import React from 'react'
import User from './User';
import Item from './Item';
import '../../static/css/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <User />
            <hr />
            <Item text="Home" path="/" />
            <Item text="Account" path="/account" />
        </div>
    )
}

export default Navbar;