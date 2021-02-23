import { useState } from 'react'

import { CreateTeamMemberModel, TeamMemberModel, TeamRoles } from './models/TeamMember'

import { Container } from 'reactstrap'

import Team from './components/Team'
import Form from './components/Form'

const InitialTeamData: TeamMemberModel[] = [
  {
    id: 'user1',
    name: 'Lindell Carter',
    email: 'email@email.com',
    role: TeamRoles.ProjectManager
  }
]

function App() {
  const [team, setTeam] = useState<TeamMemberModel[]>(InitialTeamData)

  const addTeamMember = (data: CreateTeamMemberModel) => {
    const id = new Date().toString()
    const newTeamMember: TeamMemberModel = {
      ...data,
      id
    }
    setTeam([...team, newTeamMember])
  }

  return (
    <Container style={{
      marginTop: 50
    }}>
      <h1>Team Members</h1>
      <Form onSubmit={addTeamMember} />
      <Team team={team} />
    </Container>
  );
}

export default App;
