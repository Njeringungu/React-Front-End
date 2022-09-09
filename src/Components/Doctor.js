import React,{useEffect,useState} from "react";

function Doctor(){

    const[appointments,setAppointments] = useState([])

    useEffect(() => {
        fetch("http://localhost:4500/appointments")
        .then((response) =>response.json())
        .then((appointments) =>setAppointments (appointments) );
    }, []);
    let array = (
    appointments.map((x)=>(
       <div >
        <div className="container">
        <p>Patient Id: {x.patient_id}</p>
        <p>Doctor Id: {x.doctor_id}</p>
        <p>Date: {x.date}</p>
        </div>
       </div> 

    )))


    return(
        <div>{array}</div>
    )
}


export default Doctor;
