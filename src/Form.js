import React, { useState } from "react";
import ReactDOM from "react-dom";

 export default function Form() {

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
                name="Name"
                placeholder="Enter Name"
                onChange={changeHandler}
              />
            </label>
          </div>
          <div className="group">
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
          <div className="group">
            <label>
              Role
              <input
                type="text"
                name="role"
                placeholder="Enter Team Role"
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
