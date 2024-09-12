import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const teamList = [
  { teamPlayer: 'Devyn', teamRole: 'dps'},
  { teamPlayer: 'Jaida', teamRole: 'tank'},
  { teamPlayer: 'Karen', teamRole: 'healer'}
];

const initialFormValues = { teamPlayer: '', teamRole: ''};

function TeamForm() {
  const [player, setPlayer] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({...formValues, [name]: value})
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newPlayer = {
      teamPlayer: formValues.teamPlayer.trim(),
      teamRole: formValues.teamRole.trim()
    };
    setPlayer(player.concat(newPlayer));
    setFormValues(initialFormValues);
  };


  return (
    <div className='container'>
      <h1>GG EZ OW Team</h1>
      {player.map((player, idx) => {
        return (
          <div key={idx}>
            {player.teamPlayer} is a {player.teamRole}
            </div>
        );
      })}
      <form onSubmit={submit}>
        <input
        name="teamPlayer"
        type="text"
        value={formValues.teamPlayer}
        onChange={change}
        ></input>
        <input
          name="teamRole"
          type="text"
          value={formValues.teamRole}
          onChange={change}
          ></input>
          <button>Submit Player Info</button>
      </form>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TeamForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
