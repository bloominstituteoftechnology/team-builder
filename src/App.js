import React, { useState } from 'react';
import './App.css';
import TeamForm from './TeamForm';


const initialValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ teamMember, setTeamMember ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialValues);


const onSubmit = () => {
  setTeamMember([formValues, ...teamMember])

  setFormValues(initialValues);
}

const onChange = (name, value) => {
  setFormValues({...formValues, [name]: value});
}

  return (
    <div className="container">
      <h1>Team Members</h1>
      <TeamForm
        values={formValues}
        change={onChange}
        submit={onSubmit}
      />
      {teamMember.map((member, index) => {
        return (
          <div key={index}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
