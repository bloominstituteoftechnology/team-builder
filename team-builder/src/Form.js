import React, { useState } from 'react'

const teamList = [
    {position: 'Front-end developer', firstName: 'Levi', lastName: 'Smith' },
    {position: 'Back-end developer', firstName: 'Lyla', lastName: 'Rose' },
    {position: 'Designer', firstName: 'Katelyn', lastName: 'Bessire'}
  ]

const initialFormValues = { 
    position: '',
    firstName: '',
    lastName: '',
}

 function Form() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [teamMembers, setTeamMembers ] = useState(teamList);
  
    const change = (evt) => {
      const { name, value } = evt.target;
      setFormValues({ ...formValues, [name]: value});
    }
    const submit = (evt) => {
      evt.preventDefault();
  
      const newMember = {
        position: formValues.position.trim(),
        firstName: formValues.firstName.trim(),
        lastName: formValues.lastName.trim()
      }
  
      setTeamMembers(teamMembers.concat(newMember));
      setFormValues(initialFormValues);
    }
    return (
      <div className='container'>
        <h1> Team builder </h1>
        {teamMembers.map((member, idx) => (
          <div key={idx}>
            {member.firstName} {member.lastName} is our {member.position}
          </div>
        ))}
        <form onSubmit={submit}>
          <label> Position
          <input 
            type='text'
            value={formValues.position}
            name='position'
            onChange={change}
          />
          </label>
          <label> First Name
          <input 
            type='text'
            value={formValues.firstName}
            name='firstName'
            onChange={change}
          />
          </label>
          <label> Last Name
          <input 
            type='text'
            value={formValues.lastName}
            name='lastName'
            onChange={change}
          />
          </label>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }

  export default Form;
    