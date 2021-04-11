import React from 'react'

export default function Member({ details }) {
    if (!details) {
        return <h3>Working fetching your team Members&apos;s details...</h3>
    }

    return (
        <div className='member container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p>Language: {details.language}</p>
        </div>
    )
}