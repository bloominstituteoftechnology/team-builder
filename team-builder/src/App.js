import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Users from './components/User'

function App() {

  const initialFormValues = {
    memberName: '',
    memberEmail: '',
    memeberRole: ''
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [newMemberB , setNewMember] = useState([])

  const updateForm = (inputName, inputValue) => {
    
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newMemeber = {
      memberName: formValues.memberName,
      memberEmail: formValues.memberEmail,
      memeberRole: formValues.memeberRole
    }
    if(!newMemeber.memberEmail || !newMemeber.memberName || !newMemeber.memeberRole) return

    setFormValues(initialFormValues)

    setNewMember(newMemeber)
  }




  return (
    <div className="App">
      <h1>Slow life</h1>
      <Form values={formValues} update={updateForm} submit={submitForm}/>
      <Users team={newMemberB}/>
    </div>
  );
}

export default App;
