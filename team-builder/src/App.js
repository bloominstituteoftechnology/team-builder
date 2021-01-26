import React, { useState } from 'react';
import Form from './components/form';
import Member from './components/member'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    }
    setMembers([newMember, ...members]);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <h1>Form:</h1>
      <Form values={formValues} update={updateForm} submit={submitForm}/>

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member}/>
          )
        })
      }
    </div>
  );
}

export default App;
