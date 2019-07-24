import React, { useState } from "react";

function Form(props) {
  console.log(props);
  const [user, setUser] = useState({ username: "", password: "", role: "" });

  return (
    // <form onSubmit={handleSubmit}>
    <form>
      <fieldset>
        <legend>Signup</legend>
        <div className="form-group row">
          <label for="username" className="col-sm-2 col-form-label">
            Username
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                // onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group" className="">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={user.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group" className="">
          <label for="exampleInputRole1">Role</label>
          <button
            type="edit"
            className="btn btn-primary"
            onClick={() => props.setMember(props.member)}
          >
            Edit
          </button>
          <input
            type="text"
            className="form-control"
            name="role"
            placeholder="Enter your role"
            // onChange={handleChange}
            value={user.role}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
