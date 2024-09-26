import React, {useState} from 'react';
import './App.css';
import Form from './form/form';

function App() {
  const [memberToEdit, setMemberToEdit] = useState("");

  const editMember = (member) => {
    console.log(member);
    setMemberToEdit(member);
  }

  return (
    <div className="App">
      <Form editMember={editMember} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;