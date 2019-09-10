import React from 'react';
import './App.css';

import {useState, useEffect} from 'react';

const Form = props => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  // Goes with memberEdit
  useEffect(() => {
    return setMember(props.memberEdit);
  }, [props.memberEdit])

  const handleChange = event => {
    setMember({...member, [event.target.name]:event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Updates state
    props.setTeam([...props.team, member]);
    // Resets fields
    setMember({
      name:'',
      email:'',
      role:''
    });
  }

  return (
    <form onSubmit={event=>handleSubmit(event)}>
      <label>
        Name:
        <input type='text' name='name' value={member.name} onChange={e=>handleChange(e)} />
      </label>

      <br/>

      <label>
        Email:
        <input type='text' name='email' value={member.email} onChange={e=>handleChange(e)} />
      </label>

      <br/>

      <label>
        Role:
        <input type='text' name='role' value={member.role} onChange={e=>handleChange(e)} />
      </label>

      <br/>

      <button>Submit</button>
    </form>
  )

}


export default Form;
