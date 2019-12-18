import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './Components/MemberForm';
import MemberList from './Components/MemberList';


function App() {
  //state
  const [members, setMember] = useState([
    {
      id: 1,
      name: "Gus Baden",
      email: "myemail@mail.com",
      role: "Student"

      }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember]);
  };

  
  
  return (
    <div className="App">
      <h1>Team</h1>
      <MemberForm addNewMember={addNewMember}/>
      <MemberList members={members} />
      
    </div>
  );
}

export default App;
