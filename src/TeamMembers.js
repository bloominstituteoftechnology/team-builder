import React from 'react';

export default function TeamMember(props) {
    const { details } = props;

    if(!details) {
        return <h2>Team Details coming up!</h2>
    }

    return (
        <div className='team-container'>
            <h1>{details.name}</h1>
            <h2>Email: {details.email}</h2>
            <h2>Role: {details.role}</h2>
        </div>
    )
}