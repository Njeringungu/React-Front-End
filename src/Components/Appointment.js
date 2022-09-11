import React,{useState} from "react";


function Appointment(){

  const[appointments,setAppointments]=useState({
    
    patient_id:"",
    doctor_name:"",
    date:""
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
   
    function handleChange(e){
        setAppointments({...appointments, [e.target.id]:e.target.value})
      }

return(
    <>
    
  <h1>Book<em>!</em></h1>

  <form className="form" onSubmit={handleSubmit}>

  <label htmlFor="name">Patients Id:</label>
    <input type="number" id="patient_id" value = {appointments.patient_id} onChange={ ( e ) => handleChange( e ) }/>

  <label htmlFor="name">Doctors Id:</label>
    <input type="number" id="doctor_id" value = {appointments.doctor_id} onChange={ ( e ) => handleChange( e ) }/>

    <label htmlFor="date">Date</label>
        <input type="date" id="date" value={appointments.date} onChange = { ( e ) => handleChange( e ) } />

<input type="submit" value="Submit" />
  </form>
  
  <card className="doctorCard">
    <h2>Our Doctors</h2>
        <li>Id:1,
          <br/>Name:Michael Wafula,<br/>
        Speciaulty:Dentist</li>
        
        <li>Id:2,
          <br/>Name:Lucy Atieno,<br/>
        Speciaulty: Dermatologist</li>
        
        <li> Id:3,
          <br/>Name: Jane Wangui,<br/>
        Speciaulty: ENT</li>
      
        <li>Id:4,<br/>
        Name:James Mogaka,<br/>
        Speciaulty:Optician</li>
       
       
        
  </card>
  
  </>
  )};
export default Appointment;
