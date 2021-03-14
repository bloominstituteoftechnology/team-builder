import './App.css';
import TeamForm from './components/TeamForm.js';


const teamMembers = [
  {
    name: 'mary',
    profession: 'hilarious',
  },
  {
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
