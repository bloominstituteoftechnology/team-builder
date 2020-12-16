import './App.css';
//import 'normalize.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';


const emptyForm = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}


function App() {

  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(emptyForm);


  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const addToTeam = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.name || !newMember.email || !newMember.role) return;

    setTeam(team.concat(newMember));
    setFormValues(emptyForm);


  };


  return (
    <div className='App'>
      {/* <StyledTitle>Team Builder!</StyledTitle> */}
      <Form values={formValues} update={updateForm} add={addToTeam} />
      {team.map((member, index) => {
        return (
          <div key={index}>
            <h2>{member.name}</h2>
            <h4>{member.email}</h4>
            <h4>{member.role}</h4>
          </div>
        );
      })}
    </div>
  );
}

// const StyledTitle = styled.h1`
//   font-size: 5rem;
//   font-weight: bold;
// `;

export default App;
