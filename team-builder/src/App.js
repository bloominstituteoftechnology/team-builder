import React, { useState } from 'react';
import './App.css';

function App() {

  const [members, setMembers] = useState([

    {name:"Dave", email: "dave@thisemail.com", role:"Bus driver",},
    {name:"Mike", email: "mike@thisemail.com", role:"Banker",},
    {name:"Bill", email: "bill@thisemail.com", role:"Programmer",}
  ]);
  
  
  
  
  return <div className="App" />;	  
}	

export default App;
