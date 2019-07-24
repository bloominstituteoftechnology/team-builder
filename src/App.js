import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { teamData } from './TeamData';


const App = () => {
  const [memberList, setMemberList] = useState( [teamData] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={ (props) => {
        return(<Movie {...props} />)
      }} />
    </div>
  );
};

export default App;
