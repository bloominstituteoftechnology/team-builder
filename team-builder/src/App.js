import {useState} from 'react'
import './App.css';
import Form from './Form'
import Member from './Member'

function App() {

  const [member, setMember] = useState([{
    name: "Steve",
    email: "purefallen11@gmail.com",
    role: "Software Developer"
  }])


 
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Member member={member} />
      </header>
    </div>
  );
}

export default App;
