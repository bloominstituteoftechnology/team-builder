import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberCard from './components/MemberCard'
import MemberForm from './components/MemberForm'


function App() {

  const [teamMembers, setTeamMembers] = useState([{
    name: "Tom Lewandowski",
    email: "tlewandowski18@gmail.com",
    role: "Full Stack Engineer"
  }])

  const addNewMember = member => {
    setTeamMembers([...teamMembers, {
      name: member.name,
      email: member.email,
      role: member.role
    }])
  }

  return (
    <div className="App">
      <MemberForm addNewMember={addNewMember}/>
      {teamMembers.map(member => 
        <MemberCard name={member.name} email={member.email} role={member.role} />)} 
    </div>
  );
}

export default App;
