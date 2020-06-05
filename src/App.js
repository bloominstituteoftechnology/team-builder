import React, {useState} from 'react';

import {useLocalStorage} from './hooks/useLocalStorage';
import Form from './components/Form';
import TeamList from './components/TeamList.js';
// import AddTeamMember from './AddTeamMember';
import './App.css';
// import { waitForElementToBeRemoved } from '@testing-library/react';
//Setup initial data->
const teamData = [
  {
    id: 1,
    name: "tom",
    email: "dev@developer.com",
    role: "Full Stack Developer"
  }
];
//one off establishment of stored value in local storage.
//This should be handled by the useLocalStorage hook, but
//for some reason using the hook creates an infinete loop.
//Need to investigate...
// ->window.localStorage.setItem("team", JSON.stringify(teamData));
// console.log("const team->", teamData);

function App() {
  const [team, setTeam] = useState(teamData);
  const [storedTeam, setStoredTeam] =useLocalStorage("team");
  console.log(storedTeam);
  
  const addTeamMember = newTeamMember => {
    // console.log("From App->newTeamMember",newTeamMember);
    setTeam([...team, newTeamMember]);
    setStoredTeam([...storedTeam, newTeamMember]);
    
  };
  const [memberToEdit, setMemberToEdit] = useState(undefined);
  const handleEditMember = teamMember => {
    setMemberToEdit(teamMember);
    console.log("teamlist Member being edited is->",teamMember);
  };
  const [isEditing, setIsEditing] = useState(false);
  const editMember = teamMember => {
      const newTeam = storedTeam.slice();
        // const changeMember = teamMember =>{
            newTeam.map(member => {
              console.log("member from map",member);
              if (member.id === teamMember.id) {
                member.name = teamMember.name;
                member.email = teamMember.email;
                member.role = teamMember.role;
              };
              return newTeam;
            });
            setStoredTeam(newTeam);
        };
  return (
    <div className="App">
      <header className="App-header">
      The Core App of the Team Builder App....
        <Form 
        addMember={addTeamMember} 
        memberToEdit={memberToEdit}
        isEditing={isEditing}
        editMember={editMember}
        />
        {/* <AddTeamMember /> */}
        <TeamList 
        team={storedTeam} 
        handleEditMember={handleEditMember}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        />

        
      </header>
    </div>
  );
}

export default App;
