import React from 'react';

function TeamMembersList(props) {

    const newTeamMembers = [];

    for (let member of props.myTeamMembers) {
        newTeamMembers.push(<div>
            <p>{member.name} </p>
            {/* <p>{member.email} </p> */}
            {/* <p>{member.role} </p> */}
        </div>);
    }

    return (
        <div>
            {newTeamMembers}
        </div>
    )
}

export default TeamMembersList