import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';


function App() {
  const [teamList, setTeamList] = useState([
    { name: 'Dionis', character: 'Karlee'},
    { name: 'Mark', character: 'Evangelo'},
    { name: 'Brian', character: 'Doc'},
    { name: 'Anauris', character: 'Harley'},
])

  

  return (
    <div className="App">
      <Form 
        teamList={teamList}
        setTeamList={setTeamList}
      />
      {JSON.stringify(teamList)}
    </div>
  );
}

export default App;
