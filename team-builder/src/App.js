import './App.css';
import TeamList from './components/TeamList.js';
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
