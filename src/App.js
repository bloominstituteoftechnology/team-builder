import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from "./components/TeamList";
import Form from "./components/Form";
import teamData from "./data/teamData";

function App() {
  return (
    <div>
      <TeamList />
      <Form />
    </div>
  );
}

export default App;
