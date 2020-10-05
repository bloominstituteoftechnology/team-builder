import React, {useState} from 'react'

const Form = (props) => {
    const [person,setPerson] = useState({name:'',email:'',role:''})

    const handleChanges = (event) => {
        setPerson({...person, [event.target.name]: event.target.value })
    }
    
    const submitForm = (event) => {
        event.preventDefault()
        props.addNewPerson(person)//invoking this on App
        setPerson({name:'',email:'',role:''})  
    } 

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                placeholder="Enter Name"
                onChange={handleChanges}
                value={person.name}
                name="name"
            />
            <br/>
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="text"               
                placeholder="Enter Email"
                onChange={handleChanges}                
                value={person.email}
                name="email"
            /><br/>
            <label htmlFor="role">Role</label>
            <input 
                id="role"
                type="text"
                placeholder="Enter your Role"
                onChange={handleChanges}
                value={person.role}
                name="role"
            /><br/>
            <button type="submit">Add Team Member</button>    
        </form>
    )
}

export default Form