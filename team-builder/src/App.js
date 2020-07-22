import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Peep from './Peep'

const defaultFormValues = {
  username: '',
  email: '',
  role: '',
}

const initialPeeps = [
  {
    username: 'Nova',
    email:'fractalreflections@gmail.com',
    role: 'Queen Empress'
  }
]

const fakeAxiosGet = () => {
  return Promise.resolve({ status:200, success: true, data: initialPeeps })
}

const fakeAxiosPost = (url, { username, email, role }) => {
  const axiosNewb = { username, email, role }
  return Promise.resolve({ status: 200, success: true, data: axiosNewb })
}


function App() {
  const [peeps, setPeeps] = useState([])
  const [formValues, setFormValues] = useState(defaultFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () =>{
    const newb = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newb.username || !newb.email || !newb.role) return
    
    fakeAxiosPost('fakeurl.com', newb)
    .then(res=>{
      debugger
      const newbfromAPI = res.data
      setPeeps([...peeps, newbfromAPI])
      setFormValues(defaultFormValues)
      initialPeeps.push(newbfromAPI)
    })
  }

  useEffect(() => {
    fakeAxiosGet('fakeurl.com')
    .then(res =>{
      setPeeps(res.data)
    })
  }, []) 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        peeps.map(peep =>{
          return (
            <Peep peep={peep} />
          )
        })
      }
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
