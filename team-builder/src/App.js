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
    if (!newPerson.name || !newPerson.email || !newPerson.role) {
      setError("Error: must provide valid inputs");
      return;
    }
    setPeople([newPerson, ...people]);
    setFormValues(initialFormValues);
    setError('');

    // const addedPerson = await axios.post('fakeapi.com', newPerson);

    // axios.post('fakeapi.com', newPerson)
    //   .then(res => {
    //     setPeople([res.data, ...people]);
    //     setFormValues(initialFormValues);
    //     setError('');
    //   })
    //   .catch(err => console.log(err));
  }
  
  // useEffect(() => {
  //   axios.get('fakeapi.com').then(res => setPeople(res.data))
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