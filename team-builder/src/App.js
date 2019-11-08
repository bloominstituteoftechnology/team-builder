import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from "./components/Form.js";

function App() {
  const [people, setPeople] = useState({
    first: "",
    last: "",
    email: "",
    job: "",
  })
  const addNewMember = member =>{
    setPeople([...people, member]);
  };
  return (
    <div className="App">
      <h1>Member Form</h1>
      <MemberForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;
