
import React, { useState } from "react";


const initialValue = {
    name:"",
    email:"",
    role: ""
  }

export function Form(props) {

    const [formValue, setFormValue] = useState(initialValue);

    
    const changeHandler = (e) => {
        setFormValue({...initialValue, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.setTeamMembers([...props.teamMembers,formValue])
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"  
          type="text"
          placeholder="Name Here"
          value={formValue.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={formValue.email}
          onChange={changeHandler}
        />
      </label>
      <label>
        Role:
        <input
          name="role"
          type="text"
          placeholder="Enter Role"
          value={formValue.role}
          onChange={changeHandler}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form