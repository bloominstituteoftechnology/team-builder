import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const teamList = [
  { name: "Carl", email: "carl@carl.com", role: "student" },
  { name: "tim", email: "tim@tim.com", role: "instructor" },
  { name: "sarah", email: "sarah@sarah.com", role: "Team Lead" },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function SimpleForm() {
  const [team, setTeam] = useState(teamList);

  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    // if (
    //   !newTeamMember.username ||
    //   !newTeamMember.email ||
    //   !newTeamMember.role
    // ) {
    //   return;
    // }
    evt.preventDefault();
    setTeam([...team, newTeamMember]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <h2>Awesome Team Members</h2>
      {team.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name} is a {member.role}
          </div>
        );
      })}

      <form onSubmit={submit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={formValues.name}
            placeholder="enter a name"
            onChange={change}
          />
        </label>

        <label>
          Role
          <select name="role" value={formValues.role} onChange={change}>
            <option value="">select Role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
            <option value="tl">Team Lead </option>
            <option value="be">Back End </option>
            <option value="fe">Front End </option>
            <option value="pm">Project manager </option>
          </select>
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={change}
            value={formValues.email}
            placeholder="type an email"
            maxLength="30"
          />
        </label>
        <div className="submit">
          <button
          // disabled={
          //   !formValues.email || !formValues.username || !formValues.role
          // }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

ReactDOM.render(
  <>
    <SimpleForm />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
