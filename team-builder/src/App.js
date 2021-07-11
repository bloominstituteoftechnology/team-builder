import React, { useState } from 'react'
import './App.css';
// import './Member'
import Form from './Form'


const team = [
  {
    name: 'Clark Kent',
    hero: 'Superman',
    email: 'ManofSteel@jsl.org'
  },
  {
    name: 'Bruce Wayne',
    hero: 'Batman',
    email: 'DarkKnight@jsl.org'
  },
  {
    name: 'Diana Prince',
    hero: 'Wonder Woman',
    email: 'LassoofTruth@jsl.org'
  },
  {
    name: 'Barry Allen',
    hero: 'Flash',
    email: 'ScarlettSpeedster@jsl.org'
  }

]

export default function App() {
  const [members, setMembers] = useState(team)
  const [value, setFormValue] = useState(values)

  const update = (newName, newValue) => {
    setFormValue({...value, [newName] : newValue})

    const onSubmit = () => {
      const newbie = {
        name: value.name.trim(),
        hero: value.hero.trim()
      }

      setMembers([...members, newbie])
      setFormValue(team)
    }
  
    return (
    <div className="App">
      <h1>The Justic League</h1>
      {members.map((member) => {
        return (
          <div>
          {member.name} is {member.hero}. Reach him at {member.email}
          </div>
        );
       <Form value={value} submit={onSubmit} update={update} />
      })}
    </div>
  );
}
}
