import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Form from "./Components/Form";

function App() {
  const [state, setState] = useState({
    member: "",
    email: "",
    role: ""
  });

  const stateFormChange = e => {
    setState({
      ...state,
      [e.target.member]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header>Welcome to Work</header>
      <form onSubmit={handleSubmit}>
        <label>
          Members:
          <input
            type="text"
            name="member"
            placeholder="Enter Member Name "
            onChange={stateFormChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={stateFormChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="Enter Role"
            onChange={stateFormChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
