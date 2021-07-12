import {useState} from 'react'
import './App.css';
import Form from './Form'
import Member from './Member'

function App() {

  const [member, setMember] = useState([
    {
      name: "Steve Rivera",
      email: "purefallen11@gmail.com",
      role: "Software Developer"
    }
  ]);

  const addTeamMember = mate => {
    setMember([...member, mate])
  };
 
  return (
    <div className="App">
      <header className="App-header">

        <Form addTeamMember={(mate)=>addTeamMember(mate)}/>

        <Member member={member} />
      </header>
    </div>
  );
}

export default App;
