import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
       <nav className="navbar-container">
        <ul className="navbar-links">
            <li><Link to='/home'>🏠</Link></li>
            <li><Link to='/feed'>🔍</Link></li>
            <li><Link to='/account'>👤</Link></li>
        </ul>



       </nav>
    )

}


export default NavBar