import React, { useState } from "react";
import './App.css';
import Person from './components/Person';
import PersonForm from './components/PersonForm';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [person, setPerson] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (input1, input2) => {
    setFormValues({ ...formValues, [input1]: input2})
  }

  const submitForm = (event) => {
    const newPerson = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role 
    }
    setPerson(person.concat(newPerson))
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>

      <PersonForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {person.map(person => {
        return (
          <Person key={person.id} details={person}/>
        )
      })}
    </div>
  )
}

// export default App;
