import React, { useState } from "react";

import './App.css';
import Form from './Form.js';
import PeopleList from "./PeopleList";


function App() {
  const [teamList, setTeamList] = useState(testData);
  const [formValue, setFormValue] = useState({username: "", email: "", role: ""});
  
  
  
  return (
    <div className="App">
      <Form/>
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
  email: "JohnDoe@gmail.com",
  role: "Fake Role 2",
}

];
export default App;
