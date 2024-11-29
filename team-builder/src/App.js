import './App.css';
import { useState, } from 'react'

function App() {
  const team = [
    {name: 'Aidan', email: 'aidan@example.com', role: 'engineer'},
    {name: 'Drew', email: 'drew@example.com', role: 'engineer'}
  ]
  const [teamMembers, setTeamMembers] = useState(team)

  function handleSubmit(e) {
    let nameId = document.getElementById('name')
    let emailId = document.getElementById('email')
    let roleId = document.getElementById('role')

    let newTeamMember = {
      name: nameId.value,
      email: emailId.value,
      role: roleId.value
    }


    setTeamMembers([...teamMembers, newTeamMember])
    nameId.value = ''
    emailId.value = ''
    roleId.value = ''
  }

  return (
    <div className="App">
      <ul>
      {teamMembers.map((member) => {
        return <li>{member.name} {member.email} {member.role}</li>
      })}
      </ul>
      <form>
        <label>
          Name:
          <input id="name" type="text" />
        </label>
        <label>
          Email:
          <input id="email" type="text" />
        </label>
        <label>
          Role:
          <input id="role" type="text" />
        </label>
      </form>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
