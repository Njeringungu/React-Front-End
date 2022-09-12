import React,{useEffect,useState} from "react";


function Doctor(){

const[appointments,setAppointments] = useState([])
const[remove,setOnRemove]=useState(true)
   

    useEffect(() => {
        fetch("https://mydoc-appointment-app.herokuapp.com/appointments")
        .then((response) =>response.json())
        .then((appointments) =>setAppointments(appointments) );
    }, [remove]);
    

function handleDelete(e){
    let id= e.target.id;
        fetch(`https://mydoc-appointment-app.herokuapp.com/appointments/${id}`,{
            method:"DELETE"
        })
        .then((response)=>response.json())
        .then(deletedApp=>onRemove(deletedApp))
      }

function onRemove (deleteApp){
    setAppointments(appointments.filter(appointment=>appointment.id!==deleteApp.id))
    setOnRemove(()=>!remove)
    }
    let array = (appointments.map((x)=>(

        <div className="container" key={x.id} >
            <p>Patient Id: {x.patient_id}</p>
            <p>Doctor Id: {x.doctor_id}</p>
            <p>Date: {x.date}</p>
             
            <button id={x.id} onClick={handleDelete}>Delete</button>
        </div>
    )));
    return(
    <div>
    
        {array}
    </div>
    )
}


export default Doctor;
