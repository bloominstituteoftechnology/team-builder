import React, { useState } from 'react'
import TeamForm from './TeamForm';
import Team from './Team'
import styled from 'styled-components'

const initialFormValues ={ name: '', email: '', role: ''};

function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState([initialFormValues]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    console.log(newTeamMember)
    // prevents action if inputs are empty
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;

    //updates with new inputs
    setTeamMember(teamMember.concat(newTeamMember));
    //clears the form once entered
    setFormValues(initialFormValues);
  };
  
  return (
    <Container>
      <div className="container">
        <h1>Team Members</h1>
        <TeamForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
        {teamMember.map((team) =>{
        return <Team key={team.id} details={team}/>
      })}
      </div>
      </Container>
        
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  .container{
    margin: 2%;
    display: flex;
    flex-direction: column;
  }
  `
export default App;
