import React, { useState } from "react";
import "./App.css";
import uuid from 'uuid';


// uuid : creating unique ID for every object
 

const initialteamMemberList = [
  {id: uuid(), name: 'Kiyani', email: 'kiyani@lambda.com', role: 'Product manager'},
  {id: uuid(), name: 'Raissa', email: 'raissa@shopify.com', role: 'Growth engineer'},
  {id: uuid(), name: 'Maelys', email: 'maelys@paystack.com', role: 'UX engineer'},
  {id: uuid(), name: 'Monique', email: 'monique@loreal.com', role: 'Chemical engineer'},
]
   
const initialTeamMemberForm = {
  name:'',
  email:'',
  role:'',
}


function App() {
  const [teamMemberList, setteamMemberList] = useState(initialteamMemberList);
  const [teamMemberForm, setTeamMemberForm] = useState (initialTeamMemberForm);
    
  const handleChange = event => {
    console.log(event.target.name);
    setTeamMemberForm({...teamMemberForm, [event.target.name]: event.target.value});
  };
    

  // when the user clicks submit the state will be reset with empty strings
  const handleSubmit = event => {
    event.preventDefault();
    setteamMemberList(teamMemberList.concat(teamMemberForm));
  };

  return (
    <div className="App">

      {/* {console.log(teamMemberList)} */}
      
      { 
        teamMemberList.map(member => (
          <Member key={member.id} mem={member} />
        ))
      }
      <Form handleSubmit={handleSubmit} handleChange={handleChange} teamMemberForm={teamMemberForm}/>
   
    </div>
  );
}
      
export default App;


const Form = props => {
  const  { handleSubmit, handleChange, teamMemberForm} = props;

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type='text'
            name='name'
            value={teamMemberForm.name}
            onChange={handleChange}
          />
        </label>

        <label>
        Email:
        <input 
        type='email'
        name='email'
        value={teamMemberForm.email}
        onChange={event => handleChange(event)}
        />
        </label>

        <label>
        Role:
        <input 
        type='text'
        name='role'
        value={teamMemberForm.role}
        onChange={event => handleChange(event)}
        />
      </label>

      <button> Submit </button>
    </form>

  )
}


const Member = props => {
  const { id, name, role, email } = props.mem;

  return (
    <h4>
      {name}, {role}. Contact : {email}.
    </h4>
  )
}