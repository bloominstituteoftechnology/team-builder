import React from "react";

const TeamMember = props => {
    return (
        <div>
            {props.teamMember.map(member => (
                <div className="teammember" key = {member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMember;