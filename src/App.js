import React, { useState, useEffect } from 'react';
import Form from './Form';
import TeamMemberCards from './TeamMemberCards';
import './App.css';


const initialTeamMembers = [{
  Name: 'Weston Woodard',
  Email: 'westonwoodard@gmail.com',
  Role: 'Director',
},
{
  Name: 'Connie Reynolds',
  Email: 'conniereynolds@gmail.com',
  Role: 'Frontend Engineer',
},
{
  Name: 'Jonathan Ryan',
  Email: 'jonathanryan@gmail.com',
  Role: 'Backend Engineer',
}]

const initialFormValues = {
  Name: '',
  Email: '',
  Role: '',
}

function App() {
  
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newTeamMember = {
      Name: formValues.Name.trim(),
      Email: formValues.Email.trim(),
      Role: formValues.Role.trim(),
    }

    // check web guided lesson app.js starting line 39 to finish this
  }

  return (
    <div className="App">
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {teamMembers.map(teamMember => {
        return (
          <TeamMemberCards key={teamMember.id} teamMember={teamMember} />
        )
      })}
    </div>
  );
}

export default App;
