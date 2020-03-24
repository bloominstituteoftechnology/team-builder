import React, {useState, useEffect} from 'react';
import './App.css';
import {v4 as uuid} from 'uuid';

const initialTeam = [
  {id: uuid(), name: 'Shawn Rice'}
]

function App() {
  
  const [team, setTeam] = useState(initialTeam);
  
  const [formValue, setFormValue] = useState({
    name: '',
  });
  
  const onInputChange = event => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault();
    const newTeammember = {
      id: uuid(),
      name: formValue.name,
    }
    setTeam([...team, newTeammember]);
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <label>Name<br/>
          <input
            placeholder='Your Name'
            onChange={onInputChange}
            value={formValue.name}
            name='name'
            type='text'
            />
        </label>
        <br/>
        <input type='submit' />
      </form>

      <h2>Your team:</h2>
      {
        team.map(tm => <h5 key={tm.id}>{tm.name}</h5>)
      }
    </div>
  );
}

export default App;
