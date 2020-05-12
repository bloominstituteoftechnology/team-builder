import React, { useState} from 'react'
import './index.css'
import Form from "./comp/Form"
import List from "./comp/List"

function App() {

  const [members, setMembers] = useState([
    {
    id: 0,
    name: "Joseph Kelleher",
    role: "Head Developer",
    email: "JoeKelleher94@gmail.com",
  }])

  const addUser = i => {
    setMembers([...members, i])
  }

  return (
    <div className="App">
      <div className="main">
        <h1>Team Builder</h1>
        <h2>Join our team!</h2>
        <Form addUser={addUser} />
        <h2>Contact our team</h2>
        <List member={members} />
      </div>
    </div>
  );
}

export default App
