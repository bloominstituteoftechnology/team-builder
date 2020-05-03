import React from "react"

const MemberCard = props => {
    
    return (
        <div className="team-list">
            {props.members.map(member => (
            <div className="member" key={member.id}>
                    <h1>{member.name}</h1>
                    <h2>{member.email}</h2>
                    <h3>{member.role}</h3>
                </div>
            ))}
        </div>
    )
}

export default MemberCard