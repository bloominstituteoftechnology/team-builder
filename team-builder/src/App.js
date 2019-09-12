import React, { useState } from "react";
import "./App.css";

function App() {
  const [teammember, setTeammember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setTeammember({ ...teammember, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={teammember.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={teammember.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={teammember.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
