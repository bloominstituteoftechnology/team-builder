
import React, {useState} from 'react';
import Card from './components/Card';
import Form from './components/MemberForm';
import './App.css';


function App() {
  const [list, setList] = useState([])

  const addMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
      info: member.info
    }

    setList([newMember, ...list])
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Add a member</h1>
        <Form addMember={addMember}/>
        <Card cards={list}/>
      </div>
    </div>
  );
}

export default App;
