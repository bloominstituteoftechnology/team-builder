import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const initialUsers = [

  {name: 'Peter',
  email: 'pcon@gmail.com',
  role: 'Master of Ceremony'},

  {name: 'Casey',
  email: 'yachump@gmail.com',
  role: 'Wizard'},

]

function App() {

  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ userList, setUserList ] = useState(initialUsers);
  const [ errorText, setErrorText ] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newUser.name || !newUser.email || !newUser.role) {
      setErrorText('Must enter all fields properly.') 
      return;
    }

    axios.post('fakeapi.com', newUser)
    .then(resp => {
      setUserList([resp.data, ...userList])
      setFormValues(initialFormValues)
      setErrorText('')
    })
    .catch(err => {
      console.error(err)
    })

  }

  useEffect(() => {
    axios.get('fakeapi.com').then(resp => setUserList(resp.data))
  }, [])

  return (
    <div>
    <div className="App">
      <h1>Friend Form</h1>
      <div className='error'><h3>{errorText}</h3></div>
      <Form 
      formValues={formValues}
      updateForm={updateForm}
      submitForm={submitForm}
      />
    </div> 
      <UserList users={userList} errorText={errorText}/>
    </div>
  );
}

export default App;
