import React, { useState } from "react"

const Member = props => {
    const handleChanges = e => {
        
    }
    return (
        <div className="team-list">
            {props.member.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Member