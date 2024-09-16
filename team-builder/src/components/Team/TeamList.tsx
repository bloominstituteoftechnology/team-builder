import { FC } from 'react'

import { TeamMemberModel } from '../../models/TeamMember'

import {
    Button,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap'

interface TeamMemberProps {
    teamMember: TeamMemberModel
    onClickEdit(id: string): void
}

const TeamMember: FC<TeamMemberProps> = ({ teamMember, onClickEdit }) => {
    return (
        <ListGroupItem>
            <ListGroupItemHeading>
                {teamMember.name}
            </ListGroupItemHeading>
            <ListGroupItemText>
                {teamMember.role}
            </ListGroupItemText>
            <ListGroupItemText>
                {teamMember.email}
            </ListGroupItemText>
            <Button onClick={_ => onClickEdit(teamMember.id)}>Edit</Button>
        </ListGroupItem>
    )
}

interface TeamMemberListProps {
    teamMembers: TeamMemberModel[]
    onClickEdit(id: string): void
}

const TeamMemberList: FC<TeamMemberListProps> = ({ teamMembers, onClickEdit }) => {
    return (
        <ListGroup>
            {teamMembers.map(teamMember => (
                <TeamMember 
                    key={teamMember.id}
                    teamMember={teamMember}
                    onClickEdit={onClickEdit}
                />
            ))}
        </ListGroup>
    )
}

export default TeamMemberList