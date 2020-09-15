import React, { useState } from 'react';
import './App.css';
import TeamMemberForm from './components/TeamMemberForm'

const initalFormValues = {
  fname: '', //text input
  lname: '', //text input
  email: '',  //text input
  strengthSelect: '', //dropdown
}

function App() {
  const [teamMember, setTeamMember] = useState([]) //state to hold all inputted team members and their info
  const [formValues, setFormValues] = useState(initalFormValues)  //state to hold form values
  
  //onChange, update Form stored in state
  const updateForm = (inputName, inputValue) =>{
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  //onSubmit, make a new obj and send to teamMember state

  return (
    <div className="container">
      <h1>Team Member Form</h1>
      <TeamMemberForm 
      values = {formValues}
      updateForm = {updateForm}
      />
    </div>
  );
}

export default App;
