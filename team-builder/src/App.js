import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import User from './Form';
const Team = [{ Name: 'William', Role: 'Ceo' }]
const initialFormValues = { Name: '', Role: '' }
function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [team, setTeam] = useState(Team)

  const change = (input, value) => {

    setFormValues({ ...formValues, [input]: value })
    // const currentFormValues = {...formValues}
    // const newObj = {}
    // newObj[name] = value
    // const final = {...currentFormValues, newObj}
    // setFormValues(final)
  }

  const submit = () => {

    const newMembers = {
      Name: formValues.Name.trim(),
      Role: formValues.Role.trim(),
    }
    setTeam([...team, newMembers])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header className="App-header">

        {team.map((pet, idx) => {
          return (
            <div key={idx}>
              {pet.Name} is a {pet.Role}
              {console.log(team)}
            </div>
          )
        })}
        <User value={formValues} change={change} submit={submit} />
      </header>

    </div>
  );
}

export default App;
