import React, { useState } from 'react';
import './Form.css';
import User from './User.js';

function Form(){
    const [form, setForm] = useState({})
    const [user, setUser] = useState([])
    
    const handleSubmit = event =>{
       event.preventDefault()
        console.log('Clicked!')
        setUser(...user, form);
        
    }
    console.log(user);

    const handleChanges = event =>{
        setForm({...form, [event.target.name]: event.target.value});
    }
   
    return (
        <div className="form-container" >
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input placeholder='First and Last Name' type='text'  name='name' onChange={handleChanges}/><br/>
                </label>
                <label>
                    Email:
                    <input placeholder='Email Address' type='email' name='email' onChange={handleChanges}/><br/>
                </label>
                <label>
                    Role:
                    <select name='role' onChange={handleChanges}>
                        <option>---Select A Role---</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                        <option value="teamLead">Team Lead</option>
                        <option value="guestSpeaker">Guest Speaker</option>
                        <option value="alumni">Alumni</option>
                    </select><br/>
                </label>
                <button>
                    Submit
                </button>
                <User name={user.name} email={user.email} role={user.role}/>
                
               
                
            </form>
        </div>
        
        
    );
}
export default Form;