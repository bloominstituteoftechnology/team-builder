import './App.css';
import { useState } from 'react'
import Member from './components/Member'
import Form from './components/Form'

const myTeam = [
  {name: 'Eugenia', email: 'gina@hershey.pa', role: 'CNA'},
  {name: 'Antonio', email: 'ortiz88@gmail.com', role: 'Fashion Designer'},
  {name: 'Tiani', email: 'tioqueen!@ios.com', role: 'Game Designer'},
  {name: 'Zach', email: 'iamlucifer88@gmail.com', role: 'Construction'},
  {name: 'Tamara', email: 'taylor@yahoo.com', role: 'Full Stack Web Developer'}
]

const formsValue = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState(myTeam)
  const [val, setVal] = useState(formsValue)

  const update = (inputName, inputValue) => {
    setVal({...val, [inputName] : inputValue})
  }

  const onSubmit = () => {
    const squadMember = {
      name: val.name.trim(),
      email: val.email.trim(),
      role: val.role.trim()
    }

    if(!squadMember.name || !squadMember.email || !squadMember.role)
    return setMembers([...members, squadMember])
    setVal(myTeam)
  }

  return (
    <div className="App">
      <h1>My Squad</h1>
      <Form val={val} update={update} submit={onSubmit} />
      {members.map((member) => {
        return (
          <Member key={member.id} data={member} />
        )
      })}
    </div>
  );
}

export default App;
