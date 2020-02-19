import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowTeam from './ShowTeam';
import AddPeople from './AddPeople';


function App() {
  const [person, setPerson] = useState([
    {
      id: Date.now(),
      name: "Luke Hoemke",
      email: 'IamAJerk@gmail.com',
      role: "Professional Jerk",
      home_town: "Howell, MI"
    },
    {
      id: Date.now(),
      name: "Tim Rohrer",
      email: 'IloveLauren@gmail.com',
      role: "Proffessional Pearl Diver Warrior",
      home_town: "Carson City, MI"
    }
  ]);

  const saveNewPeople = newPerson => {
    const people = {
      id: Date.now(),
      name: newPerson.name,
      email: newPerson.email,
      role: newPerson.role,
      home_town: newPerson.home_town,
    };
    setPerson([...person, people]); //Had this one backwords
  };

  return (
    <div className="App">
      <AddPeople saveNewPeople={saveNewPeople} />
      <ShowTeam people={person} />
    </div>
  );
}

export default App;
