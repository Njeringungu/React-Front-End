
import React,{useEffect,useState} from "react";
import {Route,Routes} from 'react-router-dom';
import NavBar from "./NavBar";
import Appointment from "./Appointment";
import Doctor from "./Doctor";
import Patient from "./Patient";


function App(){

    
    return(

        <div className="App">
           <NavBar/> 
           
           <Routes>
            <Route exact path="/patient" element={<Patient/>}/>
            <Route exact path="/doctor" element={<Doctor/>}/>
            <Route exact path="/" element={<Appointment/>}/>
           </Routes>
        </div>
    )
}

export default App;