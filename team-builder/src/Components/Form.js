import React, { useState } from 'react';

function Form() {
    const [ mate, setMate] = useState({name: '', email: '', role: ''})
    const changeHandler= event => {
        event.preventDefault();
        console.log(event.target.value)
        setMate({...mate, [event.target.name]: event.target.value})
    }
    const submitForm= event => {
        event.preventDefault();
        console.log(event)
    }
  
    return (
      <div className="App">
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Full Name<input type='text' name='name' placeholder='Enter name' value='' onChange={changeHandler}/></label>
            <label htmlFor='email'>Email Address<input type='email' name='email' placeholder='valid email address' value='' onChange={changeHandler}/></label>
            <label htmlFor='role'>Team Role<input type='text' name='role' placeholder='team role' value='' onChange={changeHandler}/></label>
            <button type='submit'>Add team member</button>
        </form>
      </div>
    );
  }
  
  export default Form;