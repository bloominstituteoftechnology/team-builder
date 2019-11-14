import React, { useState }from 'react';
import './App.css';
import Team from "./components/Team"
import Form from "./components/Form"

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Chance Rutledge",
      email: "crutledge@gmail.com", 
      role: "Web Dev Student"
    }

  ]);
  const addNewMember = member =>{
    // const newMember = {
      // id: member.email,
      // name: member.name,
      // email: member.email,
      // role: member.role

    // };
    console.log(member);
    setMembers([...members, member]);
  };



  return (
  <div className="App">
      {/* <header className="App-header">
        
        <h3>Chance's Fancy Team Roster Builder v0.01a.5 and a half</h3>
      </header> */}
        
        <Form addNewMember={addNewMember}/>
        
        <Team members={members}/>
        {/* {members.map(value =>(
          <div>
          <p>Name: {value.name}</p>
          <p>Email: {value.email}</p>
          </div>
        ))} */}
        


     
    </div>
  );
}

export default App;
