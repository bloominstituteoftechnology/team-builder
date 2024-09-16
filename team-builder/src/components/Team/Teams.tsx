import { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import { TeamModel } from '../../models/team.model'
import { CreateTeamMemberModel, TeamMemberModel } from '../../models/TeamMember'

import Team from './Team'

interface TeamsProps {
    teams: TeamModel[]
    addMember: (teamID: string) => (newMember: CreateTeamMemberModel) => void
    editMember: (teamID: string) => (updatedMember: TeamMemberModel) => void
    onClickEdit: (teamID: string) => (memberID: string) => void
    memberToEdit: TeamMemberModel | null
}

const Teams: FC<TeamsProps> = ({ teams, addMember, editMember, memberToEdit, onClickEdit }) => {
    const { teamID } = useParams<{ teamID: string }>()
    const team = teams.find(team => team.id === teamID)

    if (!team) return null

    return (
        <Container>
            <Link to="/">&lt; Back</Link>
            <Team 
                team={team}
                addMember={addMember(team.id)}
                editMember={editMember(team.id)}
                memberToEdit={memberToEdit}
                onClickEdit={onClickEdit(team.id)}
            />
        </Container>
    )
}

export default Teams