import { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { CreateTeamMemberModel, TeamMemberModel, TeamRoles } from './models/TeamMember'
import { TeamModel } from './models/team.model'

import Home from './components/Home'
import Teams from './components/Team/Teams'

const INITAL_TEAMS: TeamModel[] = [
  {
    id: uuid(),
    name: 'Team 1',
    teamMembers: [{
      id: uuid(),
      name: 'Lindell Carter',
      email: 'email@email.com',
      role: TeamRoles.ProjectManager
    }]
  },
  {
    id: uuid(),
    name: 'Team 2',
    teamMembers: [{
      id: uuid(),
      name: 'SpongeBob',
      email: 'bob@squarepants.com',
      role: TeamRoles.BackEnd
    }, {
      id: uuid(),
      name: 'Superman',
      email: 'clark_kent@yahoo.com',
      role: TeamRoles.UIDesign
    }]
  }
]

function App() {
  const [teams, setTeams] = useState<TeamModel[]>(INITAL_TEAMS)
  const [memberToEdit, setMemberToEdit] = useState<TeamMemberModel | null>(null)

  const addMember = (teamId: string) => (data: CreateTeamMemberModel) => {
    const id = new Date().toString()
    const newTeamMember: TeamMemberModel = {
      ...data,
      id
    }
    
    setTeams(teams.map(team => {
      if (teamId === team.id) {
        return {
          ...team,
          teamMembers: team.teamMembers.concat(newTeamMember)
        }
      } else {
        return team
      }
    }))
  }

  const editMember = (teamId: string) => (data: TeamMemberModel) => {
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        return {
          ...team,
          teamMembers: team.teamMembers.map(teamMember => {
            if (teamMember.id === data.id) {
              return data
            }
            return teamMember
          })
        }
      }
      return team
    }))
    setMemberToEdit(null)
  }

  const onClickEdit = (teamId: string) => (id: string) => {
    const team = teams.find(team => team.id === teamId)
    if (!team) return
    const teamMember = team.teamMembers.find(teamMember => teamMember.id === id)
    if (teamMember) {
      setMemberToEdit(teamMember)
    }
  }

  return (
    <Switch>
      <Route path="/teams/:teamID">
        <Teams teams={teams} 
          memberToEdit={memberToEdit}
          addMember={addMember}
          editMember={editMember}
          onClickEdit={onClickEdit}
        />
      </Route>
      <Route path="/" exact>
        <Home teams={teams} />
      </Route>
    </Switch>
  )
}

export default App;
