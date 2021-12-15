import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';


const teamNames = [
  { memberName: 'Finn the human', memberRole: 'Hero' },
  { memberName: 'Jake the dog', memberRole: 'Old Hero' },
  { memberName: 'Jermain', memberRole: 'Artist' },
]

const initialFormValues = { memberName: "", memberRole: "" };

function SimpleForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [member, setMember] = useState(teamNames);

  const change = (evt) => {
    const { value, name } = evt.target;
    /**
     * const value = evt.target.value
     * const name = evt.target.name
     */
    setFormValues({ ...formValues, [name]: value });
    /**
     * formValues = {
     *  memberName: "",
     *  petType: "",
     * }
     */
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newMember = {
      memberName: formValues.memberName.trim(),
      memberRole: formValues.memberRole.trim()
    }
    setMember(member.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <h1>Simple Form App</h1>
      {member.map((pet, idx) => (
        <div key={idx}>
          {pet.memberName} is a {pet.memberRole}
        </div>
      ))}
      <form onSubmit={submit}>
        <input 
          value={formValues.memberName}
          onChange={change}
          name="memberName"
          type="text"
        />
        <input 
          value={formValues.memberRole}
          onChange={change}
          name="memberRole"
          type="text"
        />
        <button>submit</button>
      </form>
    </div>
  )
}

ReactDOM.render(  
    <>
      <SimpleForm />
      <App />
    </>
    , document.querySelector('#root')  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
