import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';


const App = () => {
  
return (
    <div className="App">
      <TeamMembers/>
      <Form/>
    </div>
  );
}

export default App;
