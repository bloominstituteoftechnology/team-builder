import React from 'react'

const TeamMember = ({ member }) => {
    return (
        <div>
            <h3>{ member.name }</h3>
            <p>Email: { member.email }</p>
            <p>Age: { member.age }</p>
            <p>Role: { member.role }</p>
        </div>
    )
}

export default TeamMember
