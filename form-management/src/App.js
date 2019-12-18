import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Braden",
      email: "email@lostMail.never",
      role: "Full-Stack-Web-Developer"
    },
    {
      name: "Kacee",
      email: "kacee@missionMail.com",
      role: "OUTTA HERE"
    },
    {
      name: "Colten",
      email: "Colton@gmail.com",
      role: "Hes Back"
    }
  ]);

  function sort(arr) {
    let nameArray = [];
    let newTeam = [];
    for (let i = 0; i < arr.length; i++) {
      nameArray.push(arr[i].name);
    }
    nameArray.sort();
    for (let j = 0; j < nameArray.length; j++) {
      newTeam.push(arr.find(e => e.name === nameArray[j]));
    }
    setTeam(newTeam);
  }

  const [memberToEdit, setMemberToEdit] = useState({
    index: null,
    name: "",
    email: "",
    role: ""
  });

  // useEffect(() => sort(team), []);

  return (
    <div className="App">
      <Form
        team={team}
        setTeam={setTeam}
        edit={memberToEdit}
        setEdit={setMemberToEdit}
        sort={sort}
      />
      <span>Member List:</span>
      <div className="team">
        {team.map((e, i) => (
          <Team member={e} setEdit={setMemberToEdit} index={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
