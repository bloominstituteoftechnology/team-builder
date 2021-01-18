import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ALTERNATE CODE
// render(
//   <>
//     <SimpleForm />
//     {/* <App /> */}
//   </>
//   , document.querySelector('#root')
// )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const teamMemberList = [
  { teamMemberName: 'John Doe', teamMemberLocation: 'California' },
  { teamMemberName: 'Jane Doe', teamMemberLocation: 'Oregon' },
  { teamMemberName: 'Rhiannon', teamMemberLocation: 'Seattle' },
]

const initialFormValues = { teamMemberName: "", teamMemberLocation: ""},

function SimpleForm() {
    const [teamMembers, setTeamMembers] = useState(teamMemberList);
    const [formValues, setFormValues] = useState(initialFormValues);

    const change = (e) => {
      console.log(e.target);
      console.log(formValues);
      const { name, value } = e.target;
      // this basically says { teamMemberName: '', teamMemberLocation: '', teamMemberName: 'exampleValue' }
      setFormValues({ ...formValues, [name]: value });
    }

    const submit = (e) => {
      e.preventDefault();
  
      const newTeamMember = {
        // needs identical structure to the other pets
        teamMemberName: formValues.teamMemberName.trim(),
        teamMemberLocation: formValues.teamMemberLocation.trim()
      }
      console.log(newTeamMember);

      // Note for developer
      if (!newTeamMember.teamMemberName) || (!newTeamMember.teamMemberLocation) return "Missing name or location"
  
      // use your setTeamMembers helper function
      setTeamMembers(teamMembers.concat(newTeamMember));
      // reset the formsValue state
      setFormValues(initialFormValues);
    }

    return (
      <div>
        {
          teamMembers.map((teamMember, i) => (
            <div key={i}>
              {teamMember.teamMemberName} is a {teamMember.teamMemberLocation}
            </div>
          ))
        }
  
        <form onSubmit={submit}>
          <input
            name="teamMemberName"
            value={formValues.teamMemberName}
            onChange={change} />
          <input
            name="teamMemberLocation"
            value={formValues.teamMemberLocation}
            onChange={change} />
  
            <button>submit new team member</button>
        </form>
      </div>
    );

}

