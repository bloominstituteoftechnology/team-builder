import React, {useState} from 'react'


const Form = ({addPerson})=>{
    const [person, setPerson] = useState({
    firstName:'',
    lastName:'', 
    email: '',
    role: ''
    })

    const handleChanges = event => {
        console.log('event', event.target.value)
        setPerson({...person, [event.target.name]:event.target.value})
    }

    console.log('person', person)
    return(
    <form>
        <label htmlFor='firstName'>
            First Name 
            <input 
            id="firstName" 
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChanges}
             
            />
        </label>
        <label htmlFor='lastName'>
        Last Name 
            <input 
            id="lastName"  
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChanges}
            />
        </label>
        <label htmlFor='email'>
        Email 
            <input 
            id="email"  
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChanges}
            />
        </label>
        <label htmlFor='role'>
        Role 
            <textarea 
            id="role"  
            placeholder="Role Description"
            name="role"
            onChange={handleChanges}
            />
        </label>
    </form>
    )
}

export default Form;