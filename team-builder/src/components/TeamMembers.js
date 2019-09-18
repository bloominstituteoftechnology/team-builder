import React from 'react';


const TeamMembers = props => {

    return (
    <div>
        {props.teamMembers.map(teamMember => (
            <div key={teamMember.id}>
                <h2>{teamMember.name}</h2>
                <p>{teamMember.role}</p>
                <p>{teamMember.email}</p>
                <button>Edit</button>
            </div>
        ))}
    </div>
    );
};

export default TeamMembers;