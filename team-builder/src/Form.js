import React, { useState } from "react";

function Form() {
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
        <div className="form-group">
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
        <div className="form-group">
          <label for="exampleInputRole1">Role</label>
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
