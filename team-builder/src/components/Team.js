import React from 'react';

const Team = (props) => {
    const { teamMember } = props;

    return (
        <div>
            <h3>{teamMember.name}</h3>
            <p>{teamMember.role}</p>
            <p>{teamMember.email}</p>
            
            
        </div>
    )
}


export default Team;