import React from 'react'
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

import { TeamMemberModel } from '../models/TeamMember'

interface TeamProps {
    team: TeamMemberModel[]
    editTeamMember(id: string): void
}

const Team: React.FC<TeamProps> = ({ team, editTeamMember }) => {
  const onClickEdit = (id: string) => () => {
    editTeamMember(id)
  }

    return (
        <ListGroup>
        {team.map(teamMember => (
          <ListGroupItem key={teamMember.id}>
            <ListGroupItemHeading>
              {teamMember.name}
            </ListGroupItemHeading>
            <ListGroupItemText>
                {teamMember.role}
            </ListGroupItemText>
            <Button onClick={onClickEdit(teamMember.id)}>Edit</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    
    )
}

export default Team