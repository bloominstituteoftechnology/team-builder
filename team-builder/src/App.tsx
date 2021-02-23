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
  const [memberToEdit, setMemberToEdit] = useState<TeamMemberModel | null>(null)

  const addMember = (data: CreateTeamMemberModel) => {
    const id = new Date().toString()
    const newTeamMember: TeamMemberModel = {
      ...data,
      id
    }
    setTeam([...team, newTeamMember])
  }

  const editMember = (data: TeamMemberModel) => {
    setTeam(team.map(teamMember => {
      if (teamMember.id === data.id) {
        return data
      }
      return teamMember
    }))
    setMemberToEdit(null)
  }

  const onClickEdit = (id: string) => {
    const teamMember = team.find(tm => tm.id === id)
    if (teamMember) {
      setMemberToEdit(teamMember)
    }
  }

  return (
    <Container style={{
      marginTop: 50
    }}>
      <h1>Team Members</h1>
      <Form 
        addMember={addMember}
        editMember={editMember}
        memberToEdit={memberToEdit}
      />
      <Team team={team} editTeamMember={onClickEdit} />
    </Container>
  );
}

export default App;
