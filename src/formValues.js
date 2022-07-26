import React from 'react'

export default function Member(props){
    const { teamMembers } = props
    return (
        <div>
        {teamMembers.map((member, i) => (
        <div key={i}>
        Name: {member.name}<br></br>
        Email: {member.email}<br></br>
        Role: {member.role}
        </div>
))}
        </div>
    )
}