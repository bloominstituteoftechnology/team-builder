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
  
  // console.log("team from app->",team);
  // const [storedTeam, setStoredTeam, handleStoredTeam] =useLocalStorage("team");
  const [storedTeam, setStoredTeam] =useLocalStorage("team");
  console.log(storedTeam);
  // console.log("Before settting storedTeam value->",storedTeam);
  // setStoredTeam(team);

  // console.log("storedTeam value->",storedTeam);
  
  const addTeamMember = newTeamMember => {
    // console.log("From App->newTeamMember",newTeamMember);
    setTeam([...team, newTeamMember]);
    setStoredTeam([...storedTeam, newTeamMember]);
    // handleStoredTeam(team);
    // console.log("storedTeam->",storedTeam);
    // console.log("From APP, Team is->",team);
  };
  const [memberToEdit, setMemberToEdit] = useState(null);
  const editMember = () => {

  };

  const isEditClicked = event => {
    console.log("App.js isEditClicked->",
    storedTeam.find(element => 
      element.id === Number(event)));
      const memberObj = storedTeam.find(element => element.id === Number(event)); 
      console.log("memberObj->", memberObj);
      setMemberToEdit(memberObj);
    console.log("app.js memberToEdit is->",memberToEdit);
    return (storedTeam.find(element => 
      element.id === Number(event)).name);
    // return storedTeam.find(element => element.id === Number(event));
    // event.preventDefault();
    // console.log("team from isEditClicked->",storedTeam);
    // console.log("event from isEditClicked->",typeof(event));
    // console.log("App.js isEditClicked->",
    // storedTeam.find(element => 
    //   element.id === Number(event)));

  };
  // const memberObj = storedTeam.find(element => element.id === Number(isEditClicked)); 
  // console.log("General App.js memberObj->",memberObj);
  return (
    <div className="App">
      <header className="App-header">
      The Core App of the Team Builder App....
        <Form addMember={addTeamMember} memberToEdit={editMember}/>
        {/* <AddTeamMember /> */}
        <TeamList 
        team={storedTeam} 
        isEditClicked={isEditClicked} 
        setMemberToEdit={setMemberToEdit}
        />

        
      </header>
    </div>
  );
}

export default App;
