import React, { useState } from 'react';
import './App.css';
import MemberForm from './components/MemberForm';
import Member from './components/Member';

// the shape of the state that drives the form
const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

export default function App() {
  const [member, setMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues); 

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    let newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };

    if (!newMember.name || !newMember.email || !newMember.role) return;

    // setMember(member.concat(newMember));
    setMember([...member, newMember]);
    
    setFormValues(initialFormValues);
  };

  return (
    // inject props into form component
    <div>
      <h1>Memeber Form</h1>
      <div className="App">
      <MemberForm 
        values ={formValues}
        update = {updateForm}
        submit = {submitForm}
      />

      {member.map((member) => {
        return <Member key={member.id} details={member}/>
      })}
    </div>
    </div>
  );
}