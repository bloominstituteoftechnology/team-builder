import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './MemberForm'
import Member from './Member'

function App() {
  const [memberValues, setMemberValues] = useState([
    {
      name: 'John Doe',
      email: 'i-shot-the-sheriff@gmail.com',
      role: 'Man on the Run'
    }
  ])

  // const [editMember, setEditMember] = useState(memberToEdit)

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMemberValues([...memberValues, newMember]);
  };

  // const memberToEdit = edit => {
  //   const updatedPerson = {
  //     name: edit.name,
  //     email: edit.email,
  //     role: edit.role
  //   }
  //   setEditMember([...editMember, updatedPerson])
  // }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Add New Member</h1>

        <MemberForm addNewMember={addNewMember} />

        <div className="form">
          <Member memberValues={memberValues} />
        </div>
      </header>
    </div>
  );
}

export default App;
