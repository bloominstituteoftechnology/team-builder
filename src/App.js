import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberList from "../src/components/MemberList"

function App() {

  //Our array of finalized members
  const [members, setMembers] = useState([]);

  //a temp member based on what is currently entered in the input fields
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    members.push(member)
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div className="App">

      <form onSubmit={event => handleSubmit(event)}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            value={member.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          role:
          <input
            type="text"
            name="role"
            value={member.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>

      <MemberList members={members} />

    </div>
  );
}

export default App;
