import React, { useState } from 'react';
import { render } from 'react-dom';
import App from './App';


const members = [
  { memberName: 'James', sport: 'Football' },
  { memberName: 'Chris', sport: 'Basketball' },
  { memberName: 'James', sport: 'Soccer' },

]
function SimpleForm() {
  const [members, setMembers] = useState(members);
  const [formValues, setFormValues] = useState({ memberName: "", sport: "" });

  const change = (evt) => {
    const { name, value } = evt.target;

    setFormValues({ ...formValues, [name]: value })
  }

  const submit = (evt) => {
    evt.preventDefault();
    setMembers(members.concat({ memberName: formValues.memberName, sport: formValues.sport }));
    setFormValues({ memberName: "", sport: "" });

  }
  return (
    <div className="container">
      <h1>Team Builder App</h1>
      {members.map((members, idx) => {
        return (
          <div key={idx}>
            {members.memberName} is in {members.sport}
          </div>
        )
      })}
      <form onSubmit={submit}>
        <input
          name="membersName"
          type="text"
          vlaues={formValues.memberName}
          onChange={change}
        />
        <input
          name="sport"
          type="text"
          vlaues={formValues.sport}
          onChange={change}
        />
        <input type="submit" value="Enter new Member!" />
      </form>
    </div>
  )}
  render(
    <>
      <App />
    </>
    , document.querySelector('#root')
)

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

