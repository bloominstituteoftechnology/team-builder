import React, { useState } from "react";
import People from "./component/People";
import PeopleForm from "./component/Form";
import './App.css';

function App() {
  const [person, setPeople] = useState([
    {
      id: 1,
      name: "Jim Bob",
      email:
        "RaunchyEgg@crackerbarrel.com ",
      role: "Cookin eggs"
    }
  ]);
  const addNewPeople = people => {
    const newPeople = {
      id: Date.now(),
      name: people.name,
      email: people.email,
      role: people.role
    };
    setPeople([...person, newPeople]);
  };
  return (
    <div className="App">
      <h1>My Slaves</h1>
      {/* we are going to pass a function down as a prop */}
      <PeopleForm addNewPeople={addNewPeople} />
      <People people={person} />
    </div>
  );
}

export default App;
