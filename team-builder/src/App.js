import './App.css';
import TeamForm from './components/TeamForm.js';


const teamMembers = [
  'Hank',
  'Beth',
  'Lydia',
];

function App() {
  return (
    <div className="App">
      <TeamForm teamMembers={teamMembers} />
    </div>
  );
}

export default App;
