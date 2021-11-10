import React, {useState } from 'react';
import './App.css';
import Form from './Form';

function App() {

  const [teamMembers, setTeamMembers] = useState([]); 
  const [values, setValues] = useState({name:'', email:'', role:''});
  
  const onSubmit = () => {
    setTeamMembers([values,...teamMembers]);
    setValues({name:'',email:'', role:'' });
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value});
  }
  return (
    <div className="App">
      <h1> Team Builder App!</h1>
      <Form
      values ={values}
      change={onChange}
      submit={onSubmit}
      />
  
    {teamMembers.map((member, idx)=>{
    return (
      <div key={idx}>
      {member.email}, {member.name}, {member.role}
      </div>
    )
    })}
    </div>
    );
  }

export default App;
