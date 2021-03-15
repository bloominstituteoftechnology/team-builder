import './App.css';
import TeamForm from './components/TeamForm.js';


const teamMembers = [
  {
    key: Math.random(),
    name: 'Mary',
    profession: 'Doctor',
  },
  {
    key: Math.random(),
    name: 'Joe',
    profession: 'Hobo',
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
