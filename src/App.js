import React, { useState } from 'react';
import './App.css';
import Form from './Componenets/Form';

function App() {

  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '', email: '', role: ''});

  const onSubmit = () => {
    setMembers([values, ...members]);
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value});
  }



  return (
    <div className="App">
     <h1>Team Builder App Yo</h1> 
     <Form
     values={values}
     change={onChange}
     submit={onSubmit}
    />
    {members.map(member, idx) => {
      return (
        <div key={(idx)}>
          {member.email}, {member.name}, {member.role} 
        </div>
      )    
    })}
    </div>
  );
}

export default App;
