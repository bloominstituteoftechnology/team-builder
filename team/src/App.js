import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'

function App() {
  const [memberList, setMemberList] = useState([])

  return (
    <div className="App">
      <Form memberList={memberList} setMemberList={setMemberList} />
    </div>
  );
}

export default App;
