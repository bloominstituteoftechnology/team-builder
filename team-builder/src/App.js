import React, { useState } from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';


const App = () => {
  const [teamMember, setTeamMember] = useState([{
    name: 'Troy',
    email: 'tmmangrum@gmail.com',
    role: 'Full Stack'
  }]);

  
  const addNewMember = member => {
   
    setTeamMember([...teamMember, { ...member, id: Date.now() }]);
  };
  
return (
    <div className="App">
      <Form addNewMember={addNewMember}/>
      <TeamMembers teamMember={teamMember}/>
      
    </div>
  );
}

export default App;
