import './App.css';

import React, { useState } from 'react';

const memberList = [
  {memberName: 'Tony', memberEmail: "tony@tony.com", memberRole: "Student"}
]

const initialFormValues = {
  memberName: "",
  memberEmail: "",
  memberRole: ""
}

function App() {
  const [members, setMembers] = useState(memberList)
  const [formValues,setFormValues]= useState (initialFormValues)
  const [formError,setFormError] = useState('')

  const change = (evt) => {
    const { name,value } = evt.target;
    setFormValues({...formValues, [name]: value})
  }

  const formChange = (evt) => {
    const name = evt.target.name;
    const {value} = evt.target;
    setFormValues({...formValues, [name]: value})
  }

  const submit = (evt) => {

    evt.preventDefault();
    if (!formValues.memberName.trim() || !formValues.memberEmail.trim()) {
      return setFormError("Please input a value");
    }
    setMembers(members.concat({ memberName: formValues.memberName.trim(),
    memberEmail: formValues.memberEmail.trim(),
    memberRole: formValues.memberRole}))
    setFormValues(initialFormValues)
  }


  return (
    <div className='container'>
      <h1>Team Members:</h1>
      {members.map((member,idx) => {
        return (
          <div key={idx}>
            <h2>{member.memberName}, {member.memberEmail}, {member.memberRole}</h2>
          </div>
        )
      })}

      <form onSubmit={submit}>
        <input
          name="memberName"
          type="text"
          value={formValues.memberName}
          onChange={change}
          placeholder='member name'>
        </input>

        <input
          name="memberEmail"
          type="email"
          value={formValues.memberEmail}
          onChange={change}
          placeholder='memeber Email'>
        </input>

        <select value={formValues.memberRole} name="memberRole" onChange={formChange}>
          <option value="">Select a Role</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Alumni">Alumni</option>

        </select>


        <input
          type="submit"
          value="Add member">
        </input>



      </form>
    </div>
  );
}

export default App;
