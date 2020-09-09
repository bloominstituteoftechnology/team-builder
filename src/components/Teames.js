import React from "react";

const Team = props => {
    console.log('my first console props', props);
    
    return (
        <div className="team-list">
            {props.teames.map(team => (
                <div className="team" key ={team.id}>
                    <h2>{team.name}</h2>
                    <h3>{team.position}</h3>
                    <h3>{team.email}</h3>
                </div>
            ))}
        </div>
    );
};
export default Team;