
import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar(){
    return(
        <nav className='navbar'>
        <NavLink className='link' to="/">Appointment</NavLink>
        <NavLink className='link' to="/doctor">Doctor</NavLink>
        <NavLink className='link' to="/patient">Patient</NavLink>
        </nav>
    
    )
}
export default NavBar;
