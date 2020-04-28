import React, {useState} from 'react';
import './App.css';
import MemberForm from "./components/MemberForm";
import MembersList from "./components/MembersList";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState([]);

  const addTeamMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const editTeamMember = member => {
    console.log("member edited: " + member.id );
    console.log("member updated name: " + member.name );
    teamMembers.find(m => (m.id===member.id)).name = member.name;
    teamMembers.find(m => (m.id===member.id)).email = member.email;
    teamMembers.find(m => (m.id===member.id)).role = member.role;
    setMemberToEdit([]);
  };

  const setEditMember = member =>{
    setMemberToEdit(member);
    console.log("memberToEdit: " + memberToEdit.name);
  }
  

  return (        
    <div className="App">
      <h1>My Team Members </h1>
      <MemberForm addTeamMember={addTeamMember} editTeamMember={editTeamMember} memberToEdit={memberToEdit} />
      <MembersList teamMembers={teamMembers} setEditMember={setEditMember} />

    </div>
  );
}

export default App;
