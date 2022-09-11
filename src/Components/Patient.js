import React,{useEffect,useState} from "react";

function Patient(){
    const[patients,setPatients] = useState([])
    const[remove,setOnRemove]=useState(true)
    const[patientName,setPatientName]= useState({name:"" })

//fetch(patients)
useEffect(() => {
        fetch("http://localhost:4500/patients")
        .then((response) =>response.json())
        .then((patients) =>setPatients(patients) );
    }, [remove]);


//post(patients)
function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:4500/patients",{
        method:"POST",
        headers:
        {
            "Content-Type":"application/json"
        }, body: JSON.stringify(patientName)

    })
    .then(response => response.json())
    .then (patient=> (patient))
}
function handleChange(e){
    setPatientName({...patientName, [e.target.name]:e.target.value})
}

//Delete(patients)
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
    <div >
     {  patients.map(patient=>(
            
         <div className="container" key={patient.id}>
            <p>Patient Name: {patient.name}</p>
            <button id={patient.id} onClick={handleDelete}>Delete</button>
         </div>

         ))}
    <form onSubmit={handleSubmit}>
         <label htmlFor="name">Patient Name:</label> 
         <input type="text" name="name" value={patientName.name} onChange = { ( e ) => handleChange( e ) }/>
         <input type="submit" value="Submit" />
    </form> 
           
        </div>
    )
   
}

export default Patient;