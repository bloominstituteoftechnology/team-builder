import React, {useState} from 'react';
import './App.css';
import List from './components/List.js';
const team = [
  {name: 'Gage', email: 'gage@fakecompany.com', role: 'head of development'},
  {name: 'Josh', email: 'josh@fakecompany.com', role: 'backend engineer'}, 
  {name: 'Adam', email: 'adam@fakecompany.com', role: 'frontend engineer'},
  {name: 'Caitlyn', email: 'caitlyn@fakecompany.com', role: 'secretary'},
  {name: 'Nick', email: 'nick@fakecompany.com', role: 'useless'}
]

function App() {
  const [teamMembers, setTeamMembers] = useState(team);
 

  return (
    <div className="App">
      <div className='Form'>
        <h1>CONTENT</h1>
      </div>
      {teamMembers.map(member => {
        return <List members={member}/>
      })}
    </div>
  );
}

export default App;
