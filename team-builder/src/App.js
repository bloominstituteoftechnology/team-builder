import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import Form from "./Form.js";


function App() {

  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({name:"", email:"", role:""});

  const editMember = (memberToAdd) => {
    setMemberToEdit(memberToAdd);
    console.log(memberToAdd);
  }

  return (
    <div className="App">
      

      {team.map((element,index)=> {
        return (
          <div>
            <p>{element.name}</p>
            <p>{element.email}</p>
            <p>{element.role}</p>
  
            <button onClick={() => editMember(element)}>EDIT</button>
          </div>
        )

      })} 

      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} />

    </div>
  );
}

export default App;
