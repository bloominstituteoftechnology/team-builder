import React from 'react';

export default function TeamDetails(props) {
    const { details } = props

    if (!details) {
        return <h3>Loading, please wait...</h3>
    }

    return (
        <div className='team-container'>
            <h2>Teammate:{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}