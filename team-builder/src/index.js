import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const teamMembers = [
  {name: 'Mitch'},
  {name: 'Alex'},
  {name: 'Sean'}
]

const initialFormValues = {
  name: '',
}

function SimpleForm() {
  const {team, setTeam} = useState(teamMembers);
  const {newName, setNewName} = useState(initialFormValues);

const change = event =>{


}
return (
  <div className = "container">
    <h1>Simple Form</h1>
      {teamMembers.map((nme, idx) => {
        return (
        <div key = {idx}>
          Team Members are {nme.name}
          </div>

      )})
      }
      <form>
        <input name='name' type='text' onChange={change} value ={newName.name}/> 
      </form>
  </div>


)

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
