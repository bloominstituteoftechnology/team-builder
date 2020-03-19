import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Members from './Components/Members';
import MemberForm from './Components/MemberForm';
import './App.css';

function App() {
  const [membersState, setMembersState] = useState([
    {
      id: 1,
      name: "Josh Riddle",
      email: "riddlej9879@yahoo.com"
    }
  ]);

  const addMemberHandler = newMember => {
    // Update the state
    setMembersState([...membersState, newMember]);
  };

  return (
    <div className="Members">
          <h1>Members List</h1>
          <MemberForm addMemberHandler />
          <Members members={membersState} />
    </div>
  );
}

export default App;
