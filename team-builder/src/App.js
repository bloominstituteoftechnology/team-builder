// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from "react";
import Members from "./components/Members";
import Form from "./components/Form";



function App() {
  const [members, setMembers] = useState([])
  const [memberToEdit, SetMemberToEdit] =useState({});

  const newMember = member => {
    const newMember = {
      id: members.length,
      name: member.name,
      email:member.email,
      role: member.role

    };
    setMembers([...members, newMember]);
  };

  const editMember = (id )=> {

    const newArray = members.filter(member => {
      return member.id === id;
    });

    SetMemberToEdit(newArray);
  };

  const deleteMember = (id )=> {
    const newArray = members.filter(member => {
      return member.id !== id;
    });

    setMembers(newArray);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form newMember={newMember} memberToEdit={memberToEdit} />
      <Members members={members} deleteMember={deleteMember} editMember={editMember} />

    </div>
  );
}


export default App;
