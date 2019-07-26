import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function NewMemberForm(props) {

  const { setPeople } = props;
  console.log('setpeople', props);

  const [person, setPerson] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChange = event => {
    setPerson({...person, [event.target.name]: event.target.value})
  };
  const handleSumbit = event => {
    event.preventDefault();
    setPeople(people => [...people, person])
    console.log('handleSubmit', person);
  }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <fieldset>
          <legend>Team Member Signup</legend>
          <div className="form-group row">
            <label>
              <input
                type="text"
                name="name"
                placeholder="Enter Team Member Name"
                value={person.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={person.email}
                onChange={handleChange}

              />
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={person.role}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="submit-button">Add Person</button>
        </fieldset>
      </form>
    </div>
  )
}
