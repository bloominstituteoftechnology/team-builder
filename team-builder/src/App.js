import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './Form.js';
import PeopleList from "./PeopleList";


function App() {
  const [teamList, setTeamList] = useState(testData);
  
  
  
  return (
    <div className="App">
      
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
