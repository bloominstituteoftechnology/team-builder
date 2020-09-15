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
    setTeam([...team, newTeamMember]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <h2>Hello World</h2>
      {team.map((member, idx) => {
        return (
          <div key={idx}>
            {member.name} is a {member.role}
          </div>
        );
      })}

      <form onSubmit={submit}>
        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={change}
        />
        <input
          name="role"
          type="text"
          value={formValues.role}
          onChange={change}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <>
    <SimpleForm />{" "}
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
