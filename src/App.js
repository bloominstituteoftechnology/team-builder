import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Team from './Components/TeamMember';

const initialValues ={
  username: '',
  email: '',
  role: '',
};

function App() {
  const [team, setTeam] = useState([]);

  const [createValue, setCreateValue] = useState(initialValues);

  const submitApplication = () =>{

  
    const newTeam ={
      name: createValue.name.trim(),
      email: createValue.email.trim(),
      role: createValue.role,
    }
  
  };

  const updateValue = ( inputName, inputValue) =>{
    setCreateValue({...createValue,[inputName]: inputValue,
    })
  };


  return (
    <div className="App">
      <Form
      values={createValue}
      update={updateValue}
      submit={submitApplication}
      />

      {team.map((team) => {
        return <Team key={team.id} details={team} />;
      })}
    </div>
  );
}

export default App;
