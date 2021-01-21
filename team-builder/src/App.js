import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
// import Added from './Added';

function App() {
  const [addedMember, setAddedMember]=useState([]);
  
// const logInfo=event=>{setAddedMember({...addedMember,event.target.name})}
  return (
    <div className="App">

      <body>
        <h1>Team Member List!</h1>
        <Form 
        addedMember={addedMember} setAddedMember={setAddedMember}
        />
        <h4>Members</h4>
        <div>
            {addedMember.map(member=>(
                <div key={member.id}>
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            ))}
        </div>
      </body>
    </div>
  );
}

export default App;
