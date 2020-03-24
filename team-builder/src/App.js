import React, {useState} from 'react';
import Form from './components/form.component';
import ListNames from "./components/list-names.component"

import './App.css';

function App() {

  const [teamNames, setTeamNames] = useState([
    {
      name: "Joe",
      email: "Yes",
      role: "yesss"
  }]);

  const addNewName = info => {
    console.log("addNewName:",info)
    const newName = {
      id: Date.now(),
      name: info.name,
      email: info.email,
      role: info.role
    };
    setTeamNames([...teamNames, newName]);
  };

  console.log("from app:",teamNames)
  return (
    <div>
      
      <Form addNewName={addNewName}/>
      <ListNames teamNames={teamNames}/>

    </div>
  );
}

export default App;
