import React, { useState } from 'react';
import './App.css';
import MemberForm from './MemberForm';
import Member from './Member'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [member, setMember] = useState([]);
  const [formValues, setFormValues] =useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    const updatedForValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedForValues)
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.email || !newMember.role) return
  }

  return (
    <div className="App">
        <h1>Create Your Team!</h1>
          <MemberForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
          />

      {
        member.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
