import React from 'react';

const TeamMember = (props) => {
    const {name, email, role} = props;
    return ( <div className="team_member">
        <h2>{name}</h2>
        <p>Role: {role}</p>
        <p>Email: {email}</p>
    </div> );
}
 
export default TeamMember;