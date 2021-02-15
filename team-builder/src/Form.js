import React, { useState } from 'react';
import './Form.css';

function Form(){
    const [form, setForm] = useState({})
    
    
    const handleSubmit = event =>{
       event.preventDefault()
        console.log('Clicked!')
    }

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
               
                
            </form>
        </div>
        
        
    );
}
export default Form;