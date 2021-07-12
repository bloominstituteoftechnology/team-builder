import {useState} from 'react'
import './App.css';
import Form from './Form'
import Member from './Member'

function App() {

  const [member, setMember] = useState([
    {
      name: "Steve",
      email: "purefallen11@gmail.com",
      role: "Software Developer"
    }
  ]);

  const addTeamMember = (mate) => {
    const newMate = {
      name: "",
      email: mate.email,
      role: mate.role
    }
    setMember([...member, newMate])
  };
 
  return (
    <div className="App">
      <header className="App-header">

        <Form addTeamMember={addTeamMember}/>

        <Member member={member} />
      </header>
    </div>
  );
}

export default App;
