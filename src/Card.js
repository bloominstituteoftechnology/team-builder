import React from 'react';

const Card = props => {
    
    return (
        <div className='team-list'>
            {props.teamMembers.map(teamMember => (
                <div className='team-member' key='{teamMember.id}'>
                <p>{teamMember.firstname} {teamMember.lastname}</p>
                <p>{teamMember.email}</p>
                <p>{teamMember.role}</p>
                </div>
            ))}
        </div>
    )
}


export default Card;