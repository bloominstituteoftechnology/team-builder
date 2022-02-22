import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Team members for simple form
const teamList = [
  {teamName: 'Alex', teamRole: 'student'},
  {teamName: 'Jacob', teamRole: 'advisor'},
  {teamName: 'Casey', teamRole: 'teacher'},
  {teamName: 'Austen', teamRole: 'CEO'},
]

const initialFormValues = {
  teamName: '',
  teamRole: '',
}

function SimpleForm() {
  const [team, setTeam] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)

const change = evt => {
  setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
}

const submit = evt => {
  evt.preventDefault();
    const newTeam = {
      teamName: formValues.teamName,
      teamRole: formValues.teamRole,
    }
    setTeam(team.concat(newTeam));
    setFormValues(initialFormValues);
}



  return (
    <div className='container'>
      <h1>Simple Form</h1>

      {
        team.map((team, index) => {
          return <div key={index}>{team.teamName} is a {team.teamRole}</div>
        })
      }
      <form onSubmit={submit}>
        <input name="teamName" type="text" value={formValues.teamName} onChange={change} />
        <input name="teamRole" type="text" value={formValues.teamRole} onChange={change} />

        <button>Submit</button>
      </form>
    </div>
  )
}




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SimpleForm />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
