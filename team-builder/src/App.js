import React, { useState } from "react";
import "./App.css";
import uuid from 'uuid';


// uuid : creating unique ID for every object
 

const initialteamMemberList = [
  {id: uuid(), name: 'Kiyani', email: 'kiyani@lambda.com', role: 'Product manager'},
  {id: uuid(), name: 'Raissa', email: 'raissa@lambda.com', role: 'Growth engineer'},
  {id: uuid(), name: 'Maelys', email: 'maelys@paystack.com', role: 'UX engineer'},
  {id: uuid(), name: 'Monique', email: 'monique@loreal.com', role: 'Chemical engineer'},
]
   
const initialTeamMemberForm = {
name:'KIYANI',
email:'',
role:'',
}

// { ...TeamMemberForm, [event.target.name]: event.target.value }

function App() {
  const [teamMemberList, setteamMemberList] = useState(initialteamMemberList);
  const [TeamMemberForm, setTeamMemberForm] = useState (initialTeamMemberForm);
    
  const handleChange = event => {
    setTeamMemberForm ([{name: event.target.value, email:event.target.value, role:event.target.value}]);
  };
    

  // when the user clicks submit the state will be reset with empty strings
  const handleSubmit = event => {
  event.preventDefault();

  setteamMemberList(teamMemberList.concat(TeamMemberForm));
  };

  return (
    <div className="App">

    {/* {console.log(teamMemberList)} */}
    
    { 
      teamMemberList.map(members => (
      <h4 key={members.id}>
        {members.name}, {members.role}. Contact : {members.email}.
        </h4>
      ))
    }
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type='text'
        name='name'
        value={TeamMemberForm.name}
        onChange={event => handleChange(event)}
        />
      </label>

      <label>
      Email:
      <input 
      type='text'
      email='email'
      value={TeamMemberForm.email}
      onChange={event => handleChange(event)}
      />
      </label>

      <label>
      Role:
      <input 
      type='text'
      role='role'
      value={TeamMemberForm.role}
      onChange={event => handleChange(event)}
      />
    </label>

    <button> Submit </button>
    </form>
    </div>
  );
 }
      
export default App;
