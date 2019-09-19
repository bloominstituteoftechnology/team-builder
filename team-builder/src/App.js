import React, { useState } from "react";
import "./App.css";
import uuid from 'uuid';


// uuid : creating unique ID for every object
 

const initialTeamMemberList = [
  {id: uuid(), name: 'Kiyani', email: 'kiyani@lambda.com', role: 'Product manager'},
  {id: uuid(), name: 'Raissa', email: 'raissa@lambda.com', role: 'Growth engineer'},
  {id: uuid(), name: 'Maelys', email: 'maelys@paystack.com', role: 'UX engineer'},
  {id: uuid(), name: 'Monique', email: 'monique@loreal.com', role: 'Chemical engineer'},
]
   
const initialTeamMemberForm = {
name:'',
email:'',
role:'',
}


function App() {
  const [TeamMemberList, setTeamMemberList] = useState(initialTeamMemberList);
  const [TeamMemberForm, setTeamMemberForm] = useState (initialTeamMemberForm);
    
  const handleChange = event => {
    setTeamMemberList ({ ...TeamMemberList, [event.target.name]: event.target.value });
  };
    
      // const handleSubmit = event => {
      //   event.preventDefault();
      //   console.log(members.name);
      // };
    
      return (
        <div className="App">

          <form>
            <label>
              Name:
              <input type="text"
              name="name"
              value={TeamMemberList.name}
              onChange={event => handleChange(event)}
              />
            </label>

            <label>
              Email:
              <input type="text"
              email="name"
              value={TeamMemberList.email}
              onChange={event => handleChange(event)}
              />
            </label>

            <label>
              Role:
              <input type="text"
              role="name"
              value={TeamMemberList.role}
              onChange={event => handleChange(event)}
              />
            </label>

            {
             TeamMemberList.map ( members => (
               <h4 key = {members.id}>
                 {members.name}, {members.role}. Contact : {members.email}.
               </h4>
             )) 
            }
            <button> Submit </button>
          </form>
        </div>
      );
    }
    
    export default App;
