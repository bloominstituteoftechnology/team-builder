import React, {useState} from 'react'


const Form = ({addPerson})=>{
    return(
    <form>
        <label htmlFor='firstName'>
            First Name 
            <input 
            id="firstName" 
            type="text"
            placeholder="First Name"
            name="firstName"
            //onChange={handleChanges}
             
            />
        </label>
        <label htmlFor='lastName'>
        Last Name 
            <input 
            id="lastName"  
            type="text"
            placeholder="Last Name"
            name="lastName"
            />
        </label>
        <label htmlFor='email'>
        Email 
            <input 
            id="email"  
            type="email"
            placeholder="Email"
            name="email"
            />
        </label>
        <label htmlFor='role'>
        Role 
            <textarea 
            id="role"  
            placeholder="Role Description"
            name="role"
            />
        </label>
    </form>
    )
}

export default Form;