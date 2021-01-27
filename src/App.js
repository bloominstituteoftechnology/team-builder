import './App.css';
import React, { useState } from "react"
import Form from "./components/Form"

const formPlaceholder = {name: " ", role: " ", email: " "}


function App() {

  const [formValues, setFormValues] = useState(formPlaceholder)
  const [users, setUsers] = useState(
    [
      {"name": "Harry", "email": "argy@bargy.com", "role": "Lead", key: 1}, {"name": "Reza", "email": "argy@bargy.com", "key": 2, "role": "Lead"}, {"name": "Mike", "email": "argy@bargy.com", "key": 3, "role": "Support"}, {"name": "Kenta", "email": "argy@bargy.com", "key": 4, "role": "Support"}
    ])

    const updateForm = (event) => {
      setFormValues({
        ...formValues,
        [event.target.name]:event.target.value
      })
    }

    const submitForm = (event) => {
      event.preventDefault();
      setUsers([...users, formValues])
    }

  return (
    <div className="App">
      <div>
        <h3> Team Members </h3>
        {users.map((user) => {
          return (
            <div key={user.key}>
              <h5>Name: {user.name}</h5>
              <h6>Role: {user.role}</h6>
              <h6>Email: {user.email}</h6>
            </div>
          )
        })}
        <Form users={users} update={updateForm} submit={submitForm} />
      </div>
    </div>
  );
}

export default App;
