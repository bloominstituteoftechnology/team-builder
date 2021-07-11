import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const memberList = [
{memberName: 'Owen', email: 'owend@owen.com', role: 'Rocket Propulsion Software Engineer'},
{memberName: 'Irene', email: 'idabest@irene.com', role: 'Frontend Engineer'},
{memberName: 'Kyeson', email: 'Kyeson@kyeson.com', role: 'Cybersecurity'},
  ]

  const [teamMember, setTeamMember] = useState(memberList)

  function submit(member) {

    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const roleInput = document.getElementById('role')

const newTeamMember = {
  memberName: nameInput.value,
  email: emailInput.value,
  role: roleInput.value,
}

setTeamMember([...teamMember, newTeamMember])

nameInput.value = ''
emailInput.value = ''
roleInput.value = ''

  }
  return (
    <div className="App">
      {teamMember.map((member) => {
        return <p>Name: {member.memberName} Email: {member.email} Role: {member.role}</p>
      })}

      <form>
        <label>
          Name:
          <input id='name' type='text'/>
        </label>

        <label>
          Email:
          <input id='email' type='text'/>
        </label>

        <label>
         Role:
          <input id='role' type='text'/>
        </label>
      </form>

      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default App;
