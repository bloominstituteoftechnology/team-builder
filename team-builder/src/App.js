import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Team from './Team'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
 }
const teamMembers = [
  {
    name: 'Luke Skywalker',
    email: 'daddysboy@tatooine.com',
    role: 'Jedi',
  },
  {
    name: 'Han Solo',
    email: 'scruffylooking@nerfherder.com',
    role: 'Scoundrel',
  },
  {
    name: 'Leia Organa',
    email: 'rebelscum@alderaan.com',
    role: 'General',
  },
  {
    name: 'Chewbacca',
    email: 'walkingcarpet@kashyyk.com',
    role: 'Pilot',
  },
]
console.log(teamMembers);

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState(teamMembers);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      ...formValues,
    }
    setMembers([...members, newMember]);
  }
  

  return (
    <div className="App">
      <header className='Header'> Rebel Alliance </header>
      <div>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      </div>
      <Team teamMembers={members} />
    </div>
  );
}

export default App;
