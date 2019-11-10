import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from "./components/Form.js";
import AddMember from "./components/AddMember.js";

function App(props) {
  const [people, setPeople] = useState([{
    first: "",
    last: "",
    email: "",
    job: ""
  }])
  const addNewMember = member =>{
    const newPerson = {
      id: Date.now(),
      first: member.first,
      last: member.last,
      email: member.email,
      job: member.job
  };
  return (
    <div className="App">
      <h1>Member Form</h1>
      <MemberForm addNewMember={addNewMember} />
      <h2>Newest Members Are</h2>
      <AddMember person={people} />
    </div>
  );
}

export default App;
