import React, { useState } from 'react';
import './Form.css';

function Form(){
    const [name, setName] = useState('');
    
    const handleSubmit = event =>{
       event.preventDefault()
        console.log('Clicked!')
    }
    return (
        <div className="form-container" >
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input placeholder='First and Last Name' type='text' id='name'/><br/>
                </label>
                <label>
                    Email:
                    <input placeholder='Email Address' type='email' id='email'/><br/>
                </label>
                <label>
                    Role:
                    <select>
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