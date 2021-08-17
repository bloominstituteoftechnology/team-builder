import React, { useState } from 'react'
import Person from './Person'
import Form from './Form'
// import axios from '../axios'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [people, setPeople] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('');
  const updateForm = (inputName, inputValue) => {
    console.log(inputName, inputValue);
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = async () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newPerson.username || !newPerson.email || !newPerson.role) {
      setError("You've gotta fill  out all of the fields, ya chump!");
      return;
    }
    
    // const addedFriend = await axios.post('fakeapi.com', newFriend);

    // axios.post('fakeapi.com', newFriend)
    //   .then(res => {
    //     setFriends([res.data, ...friends]);
    //     setFormValues(initialFormValues);
    //     setError('');
    //   })
    //   .catch(err => console.log(err));
  }

  // useEffect(() => {
  //   axios.get('fakeapi.com').then(res => setFriends(res.data))
  // }, [])

  return (
    <div className='container'>
      <h1>Team Members</h1>
      <h3 className="error">{error}</h3>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        people.map(person => {
          return (
            <Person key={person.id} details={person} />
          )
        })
      }
    </div>
  )
}