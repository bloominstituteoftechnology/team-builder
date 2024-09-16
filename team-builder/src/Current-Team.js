import React from 'react'

export default function Team(props) {
    const { members } = props
    
    if (!members) {
        return <h3> Working on finding your team!</h3>
    }

    return (
        <div>
            <h2> Name: {members.name}</h2>
            <p> Role: {members.role} </p>
            <p> Email: {members.email}</p>
        </div>
    )
}