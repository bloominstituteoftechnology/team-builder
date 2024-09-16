import './App.css';
import React,{ useState, useEffect } from 'react'
import TeamForm from './Team-Form'
import axios from './axios/index.js/index'
import Team from './Current-Team'

const initialFormValues = {
  name: '',
  email:'',
  role:'',
}

export default function App() {
  //setting state for team


const [team, setTeam] = useState([])

//setting state to hold values in form
const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const submitForm = () => {
  const newMember ={
    name: formValues.name,
    role: formValues.role,
    email: formValues.email,
  }
  if (!newMember.name || !newMember.role || !newMember.email) return

axios
.post("fakeapi.com",newMember)
.then(res => {
  setTeam([...team,newMember])
  setFormValues(initialFormValues) })
.catch(err=> {
  console.log("error in axios")
})
//  d) also on success clear the form
}
useEffect(() => {
axios.get('fakeapi.com')
.then(res => setTeam(res.data))
}, [])

  return (
    <div className="App">
      
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
    {
    team.map(member => {
        return (
          <Team key={member.id} members={member}  />
        )
        
        })
        }
      
    </div>
  );

}
