import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

import { TeamMemberModel } from '../models/TeamMember'

interface TeamProps {
    team: TeamMemberModel[]
}

const Team: React.FC<TeamProps> = ({ team }) => {
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
          </ListGroupItem>
        ))}
      </ListGroup>
    
    )
}

export default Team