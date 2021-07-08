import { FC } from 'react'
import { TeamModel } from '../../models/team.model'
import { CreateTeamMemberModel, TeamMemberModel } from '../../models/TeamMember'
import Form from '../Form'
import TeamList from './TeamList'

interface TeamProps {
    team: TeamModel
    addMember(_: CreateTeamMemberModel): void
    editMember(_: TeamMemberModel): void
    onClickEdit(_: string): void
    memberToEdit: TeamMemberModel | null
}

const Team: FC<TeamProps> = ({ team, addMember, editMember, memberToEdit, onClickEdit }) => {
    return (
        <>
        <h1>{team.name}</h1>
            <Form 
                addMember={addMember}
                editMember={editMember}
                memberToEdit={memberToEdit}
            />
            
            <TeamList
                teamMembers={team.teamMembers}
                onClickEdit={onClickEdit}
            />
        </>
    )
}

export default Team