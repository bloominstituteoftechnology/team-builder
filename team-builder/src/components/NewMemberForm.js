import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function NewMemberForm(props) {
  console.log('form props', props);
  const [teamMember, setTeamMember] = useState({
    username: "",
    email: "",
    role: ""
  });


  const submitHandler = event => {
    event.preventDefault();
    console.log("teamMember", teamMember);
  };

  const changeHandler = event => {
    console.log(teamMember);
    setTeamMember({
      ...teamMember,
      [event.target.name]: event.target.value
    });

  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Team Member Signup</legend>
          <div className="form-group row">
            <label>
              Team Member
              <input
                type="text"
                name="username"
                placeholder="Enter Team Member Name"
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Email
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Role
              <input
                type="text"
                name="role"
                placeholder="Role"
                onChange={changeHandler}
              />
            </label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
