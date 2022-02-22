import React from 'react';

export default function TeamMember(props) {
    const { details } = props

    if (!details) {
        return <h3>Getting your team together</h3>
    }

    return (
        <div className='member-container'>
            <h2>Name: {details.name}</h2>
            <p>Height: {details.height}</p>
            <p>Catchphrase: {details.catchphrase}</p>
        </div>
    )
}