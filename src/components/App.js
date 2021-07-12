import React, { useState, useEffect } from 'react'
import MemberForm from './MemberForm';
import Member from './Member';


const initialFormValues =
{
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName ,inputValue) => 
  {
    setFormValues({
      ...formValues,
      [inputName] : inputValue
    })
  }

  const submitForm = () => {
    const {name, email, role} = formValues
    if (name !== "" && email !== "" && role !== "")
    {
    setMembers([
      ...members,
      {
        name: name.trim(),
        email: email.trim(),
        role: role.trim()
      }
    ])
  }

  else 
  {
    alert("Please complete all fields");
  }

    setFormValues(initialFormValues)

  }
  return (
    <div className = 'container'>
      <h1>Jabari's Posse</h1>
      <MemberForm
      values = {formValues}
      update = {updateForm}
      submit = {submitForm}
      />
      {
        members.map(member => {
          return (
            <Member key = {member.id} details = {member} />
          )
        })
      }
    </div>

  );
}

export default App;
