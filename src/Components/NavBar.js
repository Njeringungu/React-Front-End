
import React from 'react';
import {NavLink} from "react-router-dom";
function NavBar(){
    return(
        <nav>
        <NavLink to="/">Book Appointment</NavLink>
        <NavLink to="/doctor">Doctor</NavLink>
        <NavLink to="/patient">Patient</NavLink>
        </nav>
    )
}
export default NavBar;
