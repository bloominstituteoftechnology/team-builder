import React, { useState } from "react";

import './App.css';
import Form from './Form.js';
import PeopleList from "./PeopleList";


function App() {
  const [teamList, setTeamList] = useState(testData);
  const [formValue, setFormValue] = useState({name: "", email: "", role: ""});
  
  const handleSubmit = event => {
    event.preventDefault();
    if (formValue.name) {
      setTeamList([...teamList, {name: formValue.name, email: formValue.email, role: formValue.role}]);
    }
    resetState();
    
  };

  const resetState = () => {
    setFormValue({name: "", email: "", role: ""});
  };
  
  
  return (
    <div className="App">
      <Form values ={formValue} setFunction={setFormValue} submit={handleSubmit}/>
     <PeopleList list={teamList}/>
    </div>
  );
}

const testData = [

{
  name: "John Smith",
  email: "JohnSmith@gmail.com",
  role: "Fake Role 1",
},
{
  name: "Jane Doe",
  email: "JaneDoe@gmail.com",
  role: "Fake Role 2",
}

];
export default App;
