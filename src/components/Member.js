import React from 'react'

export default function Member(props){
    const { member } = props

    if (!member) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }

    return (
        <div className='container'>
            <h1>{member.name}</h1>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
        </div>
    )
}