import React, { useState } from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Form from './Form.js'

import teamData from './MemberList.js'

function App() {

  const [member, setMember] = useState();

  return (
    <div className="App">
      <Form/>
      
    </div>
  );
}

export default App;
