import './App.css';

import React, { useState } from 'react';
import Form from './Components/Form';
import Person from './Components/Person';

const initialFormVals = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [ person, setPerson ] = useState([]);
  const [ formVals, setFormVals ] = useState(initialFormVals)
  const updateForm = (input1,input2) => {
    setFormVals({ ...formVals, [input1]:input2})
  }
  const submitForm = () =>{
    const newPerson ={
      username: formVals.username.trim(),
      email: formVals.email.trim(),
      role: formVals.role
    }
    setPerson(person.concat(newPerson))
  }

  return (
    <div className="App">
     <h2>Greetings!</h2>

     <Form
      vals={formVals}
      update={updateForm}
      submit={submitForm}
      />
      
      <Person details={person}/>
    </div>
  );
}

export default App;
