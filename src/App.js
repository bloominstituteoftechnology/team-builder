import logo from './logo.svg';
import './App.css';

import React from 'react'; 
import {useState, useEffect} from 'react'; 
import axios from 'axios';

// initial value for the team member details 
const initialMemberValues = { 
  // text inputs
    fname: ''
  , lname: ''
  , email: ''
  , role:  ''   // dropdown
};

function App() {

  // the states -- tracks team members, and details on individual memeber
  const [teamMembers, setTeamMembers] = useState([]); 
  const [member, setMember] = useState(initialMemberValues); 

  /* FORM VALUES */

  // get form values
  const formValues = {}; 

  // update form values
  const updateForm = (inputName, inputValue) => 
  { 

  }
  
  // submit form values
  const submitForm = () => { 

  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
