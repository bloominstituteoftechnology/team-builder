import React, { useState } from 'react'
import './CSS/App.css';
import './CSS/reset.css';
import Form from './Form'
import Member from './formValues'


const teamMemberList = [
  {name: 'jordon',
  email: 'jordonaren@gmail.com',
  role: 'FrontEnd Dev'},
]




function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList)
  const [formValues, setFormValues] = useState({name: '', email: '', role: ''})

  return (
    <div className="App">
    <Member teamMembers={teamMembers}  />
    <Form setFormValues={setFormValues}  formValues={formValues} setTeamMembers={setTeamMembers} teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
