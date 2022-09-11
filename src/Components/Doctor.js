import React,{useEffect,useState} from "react";


function Doctor(){

const[appointments,setAppointments] = useState([])
const[remove,setOnRemove]=useState(true)
   

    useEffect(() => {
        fetch("http://localhost:4500/appointments/patients/doctors")
        .then((response) =>response.json())
        .then((appointments) =>setAppointments(appointments) );
    }, [remove]);
    


let array = (appointments.map((x)=>(

    <div className="container" key={x.id} >
        <p>Patient Id: {x.patient_id}</p>
        <p>Doctor Id: {x.doctor_id}</p>
        <p>Date: {x.date}</p>
         
        <button id={x.id} onClick={handleDelete}>Delete</button>
    </div>
)));


function handleDelete(e){
    let id= e.target.id;
        fetch(`http://localhost:4500/appointments/${id}`,{
            method:"DELETE"
        })
        .then((response)=>response.json())
        .then(deletedApp=>onRemove(deletedApp))
      }

function onRemove (deleteApp){
    setAppointments(appointments.filter(appointment=>appointment.id!==deleteApp.id))
    setOnRemove(()=>!remove)
    }

    return(
    <>
    
        {array}
    </>
    )
}


export default Doctor;
