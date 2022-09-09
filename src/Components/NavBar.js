
import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar(){
    return(
        <nav className='navbar'>
        <NavLink to="/">Appointment</NavLink>
        <NavLink to="/doctor">Doctor</NavLink>
        <NavLink to="/patient">Patient</NavLink>
        </nav>
    )
}
export default NavBar;
