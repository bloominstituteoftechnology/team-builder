import React, { useState, useEffect } from 'react'
import Form from './Form'
import Teams from './Teams'
import axios from './axios'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App(props) {
  const [team, setTeam] = useState([]) 
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [member, setMember] = useState({});
  const updateForm = (inputName, inputValue) => {
  setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
   const newTeam = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newTeam.username || !newTeam.email || !newTeam.role) {
      return;
    }
   axios.post('fakeapi.com', newTeam)
      .then(res => {
       setTeam([...team, res.data])
       setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, []);

  useEffect(()=> {
    setMember(props.memberToEdit || {username: '', email: '', role: ''})
  }, [props.memberToEdit]);

  return (
    <div className='container'>
      <h1>Team Builder App</h1>

      <Teams
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        team.map(teammate => {
          return (
            <Form key={teammate.id} details={teammate} />
          )
        })
      }
    </div>
  );
}

