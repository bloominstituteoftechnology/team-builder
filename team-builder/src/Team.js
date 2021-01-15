import React from 'react';

export default function Team(props) {
    const { details } = props

    if (!details) {
        return <h3>fetching details is taking longer than usual...</h3>
    }


    return (
        <div className='team container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}