import './App.css';
import TeamForm from './components/TeamForm.js';


const teamMembers = [
  {
    key: Math.random(),
    name: 'mary',
    profession: 'hilarious',
  },
  {
    key: Math.random(),
    name: 'samantha',
    profession: 'hilarious',
  },
];

function App() {
  return (
    <div className="App">
      <TeamForm teamMembers={teamMembers} />
    </div>
  );
}

export default App;
