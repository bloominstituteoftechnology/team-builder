import React, { useState, useEffect } from 'react'
import Friend from './Form'
import axios from '../axios'


const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}






export default function App() {

  const [forms, setForms] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) =>{

    setFormValues({...formValues, [inputName]: inputValue})

  }


  const submitForm = () => {

  const newForm = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }

  if (!newFriend.username || !newFriend.email || !newFriend.role) return

      axios.post('fakeapi.com', newFriend)
        .then(res => {
          const friendFromBackend = res.data
          setFriends([friendFromBackend, ...friends])
          setFormValues(initialFormValues)
        })

  }

useEffect(() => {
  axios.get('fakeapi.com').then(res=> setFriends(res.data))
}, [])


  return (
    <div className = 'container'>

    <h1>Form App</h1>


    <Form 
    
    values={formValues}
    update={updateForm}
    submit={submitForm}

    />
    
    { 
      forms.map(form => {
        return(
          <Form key = {form.id} details={form}/>
        )
      })
    }
    </div>
  )
}


