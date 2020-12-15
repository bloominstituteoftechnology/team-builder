import logo from './logo.svg';
import './App.css';
import Ract, { useState } from 'react'

function App() {
  const [teamMembersList, setTeamMembersList] = useState([])

  return (
    <div className="App">
      
      <h1> Team Builder</h1>
      <FriendList />
      
    </div>
  );
}

export default App;
