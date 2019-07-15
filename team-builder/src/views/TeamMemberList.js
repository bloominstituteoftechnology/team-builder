import React from 'react';
import Member from '../components/Member'

const TeamMemberList = (props) => {
    return (
        <div>
            {props.members.map((member, i) => <Member key={i} member={member} editMember={props.editMember} />)}
        </div>
    );
};

export default TeamMemberList;