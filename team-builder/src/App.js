import {useState} from 'react'
import './App.css';
import Form from './Form'

function App() {

  const [teamMember, setTeamMember] = useState([])

  return (
    <div className="App">
      <header className="App-header">
      <Form />
      </header>
    </div>
  );
}

export default App;
