import { Form } from './App/Form';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import './App.css';

export interface TeamMember {
  id?: string;
  name: string;
  email?: string;
  role?: string;
}

const App: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    let initTeam = [{ name: 'James' }, { name: 'Kevin' }, { name: 'Larry' }];
    initTeam = initTeam.map((member) => {
      return { ...member, id: shortid.generate() };
    });
    setTeam(initTeam);
  }, []);

  const addMember = (newMember: TeamMember) => {
    setTeam([...team, { ...newMember, id: shortid.generate() }]);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <div className="teamForm">
        <Form addMember={(newMember: TeamMember) => addMember(newMember)} />
      </div>
      <div className="teamList">
        <p>Team Members:</p>
        <div>
          {team.map(({ name }) => (
            <p key={shortid.generate()}>{name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
