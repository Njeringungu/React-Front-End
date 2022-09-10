import React,{useEffect,useState} from "react";

function Patient(){
    const[patients,setPatients] = useState([])
    const[remove,setOnRemove]=useState(true)
const[patient,setPatient]= useState({
    name:""
})

useEffect(() => {
        fetch("http://localhost:4500/appointments")
        .then((response) =>response.json())
        .then((patients) =>setPatients(patients) );
    }, [remove]);

   function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:4500/patients",{
        method:"POST",
        headers:
        {
            "Content-Type":"application/json"
        }, body: JSON.stringify(patient)

    })
    .then(response => response.json())
    .then (patient=> (patient))
}
function handleChange(e){
    setPatient({...patient, [e.target.name]:e.target.value})
}
function handleDelete(e){
    let id= e.target.id;
    fetch(`http://localhost:4500/patients/${id}`,{
        method:"DELETE"
    })
    .then((response)=>response.json())
    .then(deletedApp=>onRemove(deletedApp))
}

function onRemove (deleteApp){
    setPatients(patients.filter(patient=>patient.id!==deleteApp.id))
    setOnRemove(()=>!remove)
}
    return(
       
        <div>
  
          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Patient Name:</label> 
          <input type="text" name="patient" value={patients.name} onChange = { ( e ) => handleChange( e ) }/>
          <input type="submit" value="Submit" />
            </form> 
           
        </div>
    )
   


}

export default Patient;