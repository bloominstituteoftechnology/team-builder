import React, { useState } from 'react';
import './App.css';

import TeamMembersForm from './components/TeamMembersForm.js';
import TeamMembers from './components/TeamMembers.js';

const initialTeamMembersFormValues = {
  fullname: '',
  email: '',
  role: '',
};

const initialTeamMembersList = [
  {
    fullname: 'Donald Faulknor',
    email: 'donald-faulknor@lambdastudents.com',
    role: 'Student',
  },
];

function App() {

  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembersList)
  const [teamMembersFormValues, setTeamMembersFormValues] = useState(initialTeamMembersFormValues);

  const onInputChange = event => {
    const { name, value } = event.target
    setTeamMembersFormValues({
      ...teamMembersFormValues,
      [name]: value,
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    if (!teamMembersFormValues.fullname || !teamMembersFormValues.email || !teamMembersFormValues.role) {
      return ('You must fill in all fields. Thank You!')
    }
    const newTeamMembers = { ...teamMembersFormValues };
    setTeamMembersList([...teamMembersList, newTeamMembers])
    setTeamMembersFormValues(initialTeamMembersFormValues)
  }

  return (
    <div className="App">
      <header><h1>Team Members</h1></header>
      <TeamMembersForm
        values={teamMembersFormValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {
        teamMembersList.map(teamMember => {
          return (
            <TeamMembers teamMember={teamMember} key={teamMember.id} />
          )
        })
      }
    </div>
  );
}

export default App;