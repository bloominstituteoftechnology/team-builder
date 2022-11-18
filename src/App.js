import React, { useState } from 'react';
import './App.css';
import Form from './Components/form'

function App() {
  const [members, setMembers] = useState([])
  const [values, setValues] = useState(
    {name:'', email:'', role:''}
    )

   const onSubmit = () => {
      setMembers([values, ...members])
      setValues({name:'', email:'', role:''})
    }

    const onChange = (name, value) =>{
      setValues({...values, [name]: value})
    }
  return (
    <div className="App">
      <h1>Team Builder App!!</h1>
      <Form 
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {members.map((member, id) => {
        return (
          <div key={id}> {member.name}, {member.role}, {member.email}
          </div>
        )
      })}
    </div>
  );
}

export default App;
