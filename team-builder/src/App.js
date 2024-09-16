import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid'
import Form from './Form'
import React, {useState} from 'react'
import TeamMember from './TeamMember'

const initialTeamMemberList = [
  {
    id: uuid(), 
    name: 'Jennifer',
    email: 'jstewart8053@gmail.com',
    role: 'Student',
  },

]

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {
const [teamMembers, setTeamMembers ] = useState(initialTeamMemberList)
const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => { 
     setFormValues({ ...formValues, [inputName]: inputValue })
    
       
    };
  
    const submitForm = () => {
      const teamMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role,
      }
      setTeamMembers([...teamMembers, teamMember])
    }
 
  
return(
  <div className='container'>
  <header><h1>Team Builder</h1></header>
  <Form
    values={formValues}
    update={updateForm}
    submit={submitForm}
  />
  {teamMembers.map(teamMember=> {
      return (
        <TeamMember key={teamMember.id} details={teamMember} />
      )
    })
  }
</div>
)
}
export default App;
