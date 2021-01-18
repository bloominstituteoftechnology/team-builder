import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, {useState} from 'react'
import {render} from 'react-dom'

const teamList = [
  {name: 'mike', job:'sales'},
  {name: 'bob', job:'marketing'},
  {name: 'matt', job:'operations'},

]

const intialTeamValues = [
  {teamName:'', teamOccupation:}
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
