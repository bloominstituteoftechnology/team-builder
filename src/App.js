import React, { useState } from 'react';
import './App.css';

import Form from './Form'
import Person from './Person'

const initialFormVals = {
  username: '',
  email: '',
  role: '',
}

export default function App() {

  const [ person, setPerson ] = useState([]);

  const [ formVals, setFormVals ] = useState(initialFormVals)

  const updateForm = (input1, input2) => {
    setFormVals({ ...formVals, [input1]: input2 })
  }

  const submitForm = () => {
    const newPerson = {
      username: formVals.username.trim(),
      email: formVals.email.trim(),
      role: formVals.role
    }
    setPerson(person.concat(newPerson));
    setFormVals(initialFormVals);
  }

  return (
    <div className="App">
      <h2>Hello New Friends!</h2>

      <Form
      vals={formVals}
      update={updateForm}
      submit={submitForm}
      />
      {person.map(person => {
        return (
          <Person key={person.id} details={person} />
        )
      })}

    </div>
  );
}

// export default App;
