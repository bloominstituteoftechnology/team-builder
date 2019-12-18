import React, { useState } from 'react';
import './App.css';
import Form from './Forms'


function App() {
  const [person, setPerson] = useState([
    {
    name: 'Jess',
    email: 'jlwolff2012@gmail.com',
    role: 'Head of Creativity'
    },
    {
      name: 'Doren',
      email: 'doren@yahoo.com',
      role: 'Leader of the Snake People'
    },
    {
      name: 'Ark',
      email: 'arkraga@twitch.com',
      role: 'Council Member of the Weebaloo Tribe'
    }
  ]);

  const addNewPerson = peep => {
    const newPerson = {
      name: peep.name,
      email: peep.email,
      role: peep.role
    };
    setPerson([...person, newPerson]);
  }

  return (
    <div className="App">
      <Form addNewPerson={addNewPerson} />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
