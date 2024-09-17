import './App.css';
import Form from './Form';
import Forms from './Forms';
import React, { useState } from 'react'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  
  const [values, setValues] = useState([]);
  const [error, setError] = useState('')

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {

  const info = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  if (!info.username || !info.email || !info.role) {
    setError("You didn't fill all the boxes!");
    return;
  }
  setValues([info, ...values])
  setFormValues(initialFormValues)
  setError('')

}
  return (
    <div className="App">
      <Forms
      values ={formValues}
      update={updateForm}
      submit={submitForm}
      error={error}
      ></Forms>

      {
        
        values.map((item,i) => {
          return(
            <Form key = {i} details={item} />
          )
        })
      }
    </div>
  )
}

