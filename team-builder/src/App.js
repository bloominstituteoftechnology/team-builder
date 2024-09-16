
import './App.css';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'


function App() {
  const [teamValues, setTeamValues] = useState([])
  useEffect(() => {console.log('A New Challenger!')}, [teamValues])

  return (
    <div className="App">
      <h1>
        BUILD YOUR TEAM!!

      </h1>
      <Form setTeamValues={setTeamValues} teamValues={teamValues}/>
      
      {teamValues && teamValues.map((teamMember, idx) => {
        return (
        <div key={idx}>
          <p>Name: {teamMember.name}</p>
          <p>E-Mail: {teamMember.email}</p>
          <p>Role: {teamMember.role}</p>
        </div> 
          )
      })}
    </div>
  );
}

export default App;

