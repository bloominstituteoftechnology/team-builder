import React, { useState } from "react";

export default function Forms(props) {
  const [user, setUser] = useState({ name: "", email: "", jobtitle: "" });

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedUser
    );

    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("username", user);
    props.teamAdd(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your password"
            value={user.name}
            onChange={event => handleChange(event)}
          />
        </div>
      </label>
      <label>
        E-Mail
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter your password"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </div>
      </label>
      <label>
        Job-Title
        <div>
          <input
            type="text"
            name="jobtitle"
            placeholder="Enter your password"
            value={user.jobtitle}
            onChange={event => handleChange(event)}
          />
        </div>
      </label>
      <button>Submit</button>
    </form>
  );
}
