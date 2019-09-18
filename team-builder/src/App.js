import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

const initialTeamMembers = [
  { id: uuid(), name: 'Amira', age: '20', role: 'Product Manager' },
  { id: uuid(), name: 'Dom', age: '21', role: 'Technical Lead' },
  { id: uuid(), name: 'Martins', age: '23', role: 'Software Developer' },
  { id: uuid(), name: 'Francis', age: '24', role: 'Product Sponsor' },
  { id: uuid(), name: 'Abel', age: '22', role: 'Software Tester' },
  { id: uuid(), name: 'Babatunde', age: '26', role: 'Subject Matter Expert' },
];


function App() {

  // passed in initialTeamMembers to the useState so that my state variable would use it as the initial value
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);


  return (
    <div className="App">
    </div>
  );
}

export default App;
