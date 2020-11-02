import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function UserForm(props) {
  const [user, setUser] = useState({ name: "", age: "", photo: "", bio: "" });

  const updateUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewUser(user);
    console.log(`new user ${user.value}`);
  };

  return (
    <div className="App">
      <h1>
        <span className="title">User</span> Creator
      </h1>
      <h2>Create A New User: </h2>
      <form
        onSubmit={submitForm}
        className="input-form"
        noValidate
        autoComplete="off"
      >
        <div className="input-field">
          <span className="form">
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              onChange={updateUser}
              value={user.name}
            />
          </span>
          <span className="form">
            <TextField
              id="outlined-basic"
              label="Age"
              name="age"
              variant="outlined"
              onChange={updateUser}
              value={user.age}
            />
          </span>
          <span className="form">
            <TextField
              id="outlined-basic"
              name="photo"
              label="Photo (URL)"
              variant="outlined"
              onChange={updateUser}
              value={user.photo}
            />
          </span>
          <span className="form">
            <TextField
              id="outlined-basic"
              name="bio"
              label="Bio"
              variant="outlined"
              onChange={updateUser}
              value={user.bio}
            />
          </span>
        </div>
        <div className="create-user">
          <Button type="submit" variant="contained" color="secondary">
            Create User
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
