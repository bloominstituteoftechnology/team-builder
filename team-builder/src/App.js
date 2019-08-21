import React, { useState } from 'react';
import Form from './components/Form'
import MemberCard from './components/MemberCard'

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewTeamMember = member => {
    setTeamMembers([...teamMembers, member]);
  };

  const editMember = editedMember => {
    const newTeamMembers = teamMembers.map(member => member.key === editedMember.key ? editedMember : member );
    setTeamMembers(newTeamMembers);
    setMemberToEdit();
  }
  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember} editMember={editMember} memberToEdit={memberToEdit} />
      {teamMembers.map( member => <MemberCard setMemberToEdit={setMemberToEdit} member={member}/>)}
    </div>
  );
}


export default App;
