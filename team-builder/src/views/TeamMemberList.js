import React from 'react';

const TeamMemberList = (props) => {
    return (
        <div>
            {props.members.map((member, i) => <Member key={i} member={member}/>)}
        </div>
    );
};

export default TeamMemberList;