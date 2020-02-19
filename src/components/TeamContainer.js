import React from "react";
export default function TeamContainer(props) {
    return <div className="team-list">
        <h2>Team members:</h2>
        {props.teamList.map(teamMember => (
            //in a real React app I'd make this all its own component
            <div key={teamMember.name} className="team-member-card">
                <p>{teamMember.name}</p>
                <p>{teamMember.email}</p>
                <p>{teamMember.role}</p>
            </div>
        ))}
    </div>;
}