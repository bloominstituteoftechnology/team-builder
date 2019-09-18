import FormList from "./components/FormList";
import Form from "./components/Form";
import React, {useState} from "react";

function App(){

  const[members, setMembers] = useState([
    
  ]);
  console.log(members);

  return(
  <div className="App">
    <h1>Add Team Member</h1>

    <Form members={members} setMembers={setMembers} />
    <FormList members={members} />

  </div>
  )};

export default App;