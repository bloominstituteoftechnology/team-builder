import React, { useState, useEffect } from 'react';
import MemberCard from './components/MemberCard';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

const initialValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState(initialValues);

  const formUpdate = (inputName, inputValue) =>{
    setValues({...values, [inputName]: inputValue});
  }

  const formSubmit = () =>{
    const newMember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role.trim()
    }

    setMembers([ ...members, newMember ])
    setValues(initialValues);
  }

  return (
    <div className="App">
        <h2>Add A Member:</h2>
        <Form values={values} update={formUpdate} submit={formSubmit} />
        <h1>Members:</h1>
        {members.map( member=>{
          console.log(member);
          return (
            <MemberCard key={member.id} name={member.name} email={member.email} role={member.role}/>
          )
        } )}
    </div>
  );
}

export default App;
