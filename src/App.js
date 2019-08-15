import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TeamList from './components/TeamList';
import data from './data';


function App() {
  const [members, setMembers] = useState(data);

  const addNewTeam = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      {/* <h2></h2> */}
      <TeamList addNewTeam={addNewTeam}/>
      <Form teamList={members} />
    </div>
  );
}



export default App;
