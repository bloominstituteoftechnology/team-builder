import { useState } from 'react';
import MemberList from './components/MemberList';
import Form from './components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  

  return (
    <main>
      <MemberList MemberList={teamMembers} />
      <Form setTeamMembers={setTeamMembers} />
    </main>
  );
}

export default App;
