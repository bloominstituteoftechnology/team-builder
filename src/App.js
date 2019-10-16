import React, { useState } from 'react';
import data from "./data";
import TeamForm from "./components/TeamForm";
import './App.css';


function App() {

  const [team, setTeam] = useState(data);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      linkedIn: member.linkedIn,
      github: member.github
    };
    setTeam([...team, newMember]);
  };

  

  return (


    <div className="App">
      <form>
        <label>
          <TeamForm addNewMember ={addNewMember} className="form"/>
        </label>
      </form>
    </div>
  );
}

export default App;
