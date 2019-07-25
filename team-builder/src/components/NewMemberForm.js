import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function NewMemberForm(props) {

  console.log(props);

  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });



  const submitHandler = event => {
    event.preventDefault();
    console.log('teamMember', teamMember);

  };

  const changeHandler = event => {
    const newTeamMember = { ...teamMember, [event.target.name]: event.target.value };
    setTeamMember(newTeamMember);

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
                name="name"
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
