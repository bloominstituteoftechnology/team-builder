import logo from './logo.svg';
import './App.css';
import Form from './Form'
import TeamMembers from './TeamMembers'
import React, { useState } from 'react'
import axios from './axios'



const team = [
  {fName: 'Ricky', lName: 'Pena', email:'ricky@ricky.com',role:'Backend Engineer'},
  {fName: 'Mike', lName: 'Simmons', email:'mike@mike.com',role:'Frontend Engineer'},
]
const initialFormValues = {
  fName: '',
  lName: '',
  email:'',
  role:'',
}
function App() {
  const [members,setMembers] = useState(team);
  const[formValues,setFormValues] = useState(initialFormValues);

  const updateForm = (name,value)=>{
    setFormValues({...formValues, [name]:value})
  }
  
  const onSubmit = event =>{
    const newMember ={
        fName: formValues.fName.trim(),
        lName: formValues.lName.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
    }
    if (!newMember.fName || !newMember.email || !newMember.role) return

    axios.post('fakeapi.com', newMember)
    .then(res => {
      console.log("RES:",res)
      setMembers([...members, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err);
    })
    console.log(newMember);
}
  return (
    <div className="container">
     <h1>Team Members</h1>
        <Form 
          values = {formValues}
          update = {updateForm}
          submit = {onSubmit}/>
        {
        members.map(item => {
          return (
            <TeamMembers key={item.id} team={item} />
          )
        })
      }
      
    </div>
  );
}

export default App;
