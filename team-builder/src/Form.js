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
    <div>
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
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Guest Speaker">Guest Speaker</option>
                        <option value="Alumni">Alumni</option>
                    </select><br/>
                </label>
                <button>
                    Submit
                </button>
                
            </form>
           
        </div>
        <User name={user.name} email={user.email} role={user.role}/>
    </div>
        
        
    );
}
export default Form;