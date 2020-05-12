import React, { useState } from 'react';
import TeamForm from './components/TeamForm';
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {

  const [stateList, setStateList] = useState([]);

  const addMemberHandler = updateMember => {
    console.log('adding members', updateMember);
    setStateList([...stateList, updateMember]);
  };

  return (
    <div className="App" >
      <h1>Team List</h1>
      <TeamForm addMember={addMemberHandler}/>
      <TeamMembers members={stateList}/>
    </div>
  );
}

export default App;