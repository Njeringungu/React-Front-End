import React,{useEffect,useState} from "react";
import Doctor from "./Doctor";

function Appointment({array}){
    
    function handleChange(e){
        setAppointments({...appointments, [e.target.name]:e.target.value})
      }
    const[appointments,setAppointments]=useState({
    
    patient_id:"",
    doctor_id:"",
    Date:"",
    })
    
    function handleSubmit(e){
      e.preventDefault()
      fetch("http://localhost:4500/appointments",{
        method:"POST",
        headers:
    {
      "Content-Type":"application/json"
    }, body: JSON.stringify(appointments)
    })
    .then(response=>response.json())
    .then (appointment=>(appointment) )
    }

   

return(
    <>
  <h1>Book<em>!</em></h1>

  <form className="form" onSubmit={handleSubmit}>

  <label htmlFor="name">Patients Name</label>
    <input type="text" name="Name" value={appointments.patient_id} onChange={handleChange}/>

  <label htmlFor="name">Doctors Name</label>
    <input type="text" name="Name" value = {appointments.doctor_id} onChange={handleChange}/>

    <label htmlFor="date">Date</label>
        <input type="text" name=" date"  />


 <input type="submit" value="Submit" />
  </form>
  
  
  
  </>
  )};
export default Appointment;
