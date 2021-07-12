import React from 'react';

export default function Member(props)
{
    const { details } = props

    if (!details)
    {
        return <h1>No members yet</h1>
    }

    return (
        <div className = 'member container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role {details.role}</p>
            <button> Edit Member </button>
        </div>
    )
}