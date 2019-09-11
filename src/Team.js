import React from "react";


function Teams(props) {
    
    return (
        <>
            {props.team.map((team, index) => (
                <div className="team" key={index} >
                    <h3>{team.name}</h3>
                    <h3>{team.email}</h3>
                    <h3>{team.role}</h3>
                </div>
            ))}
        </>
    )}


export default Teams;