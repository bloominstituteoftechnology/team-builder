import './App.css';
import { useState } from 'react';
import Form from './form'
import Member from './member'

// Handle change and handle submit helper functions, pass them down to Form 


function App() {

  const team = [
    { username: 'Bob', email: 'Bob23@gmail.com', role: 'Front-end' },
    { username: 'Joe', email: 'JoeSmoe@gmail.com', role: 'Back-end' },
    { username: 'Larry', email: 'LarryLegend@gmail.com', role: 'Full-stack' }
  ]


  const initialFormValues = {
    ///// TEXT INPUTS /////
    username: '',
    email: '',
    ///// DROPDOWN /////
    role: '',
  }

  const [members, setMembers] = useState(team)
  const [formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    }
    )
  }

  const submitForm = () => {
    const { username, email, role } = formValues;
    setMembers([
      ...members,
      {
        username: username.trim(),
        email: email.trim(),
        role: role.trim()
      }
    ])
    setFormValues(initialFormValues)
  }


  return (
    <div className="App">
      {members.map(
        (member, index) => {
          return <Member key={index} name={member.username}
            email={member.email} role={member.role} />
        }
      )}
      <Form formValues={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
