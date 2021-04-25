import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const teamMemberList = [
  { name: 'John', email: 'john@gmail.com', role: 'Court Jester' },
  { name: 'James', email: 'james@gmail.com', role: 'King' },
];

const initialFormValues = {
  myname: '', myemail: '', myrole: 'Select Position:',
};


function MyForm() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = event => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }
  const submit = event => {
    event.preventDefault()
    const newTeamMember = {
      myname: formValues.myname.trim(),
      myemail: formValues.myemail.trim(),
    }
    setTeamMembers(...teamMembers, newTeamMember)

    setFormValues(initialFormValues)
  }
  return (
    <div className='myContainer'>
      <form onSubmit={submit}>
        <label>Name:
          <input
            type='text'
            onChange={change}
            value={formValues.myname}
            name='myname'
          />
        </label>
        <label>Email:
          <input
            type='text'
            onChange={change}
            value={formValues.myemail}
            name='myemail'
          />
        </label>
        <label>Role:
          <select value={formValues.role} name='role' onChange={change}>
            <option value=''>Select Postion:</option>
            <option value='Mobile Developer'>Mobile Developer</option>
            <option value='Software Developer'>Software Developer</option>
            <option value='Web Developer'>Web Developer</option>
            <option value='Networking Professional'>Networking Professional</option>
            <option value='Project Manager'>Project Manager</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <MyForm />
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
