import React from 'react'

export default function TeamMemberCards(props) {
    const { teamMember } = props

    if (!teamMember) {
        return <h3>Fetching your Team Members...</h3>
    }
    
    return (
        <div className='teamMember container'>
            <h2>{teamMember.Name}</h2>
            <p>Email: {teamMember.Email}</p>
            <p>Role: {teamMember.Role}</p>
        </div>
    )
}