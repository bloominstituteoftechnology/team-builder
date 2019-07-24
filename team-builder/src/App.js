import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const [teamMember, setTeamMember]= useState(teamData)

const App = () => (
  <div>
    <Navigation />
		<Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
		<TeamMember />
      <Form />
  </div>
);

export default App;
