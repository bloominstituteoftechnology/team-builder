import React, { useState } from 'react'
import './CSS/App.css';
import './CSS/reset.css';
import Form from './Form'
import FormVaules from './formValues'


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
    
    <FormVaules values={teamMembers} />
    </div>
  );
}

export default App;
