import React from 'react'

export default function FormVaules(props){
    const { values } = props
    return (
        <div>
        {values.map((member, i) => (
        <div key={i}>
        Name: {member.name}<br></br>
        Email: {member.email}<br></br>
        Role: {member.role}
        </div>
        ))}
        </div>
    )
}