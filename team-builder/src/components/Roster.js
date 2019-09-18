import React from "react";

const Roster = props => {
    return (
        <>
        {props.roster.map(player => (
            <div key={player.id}>
                <h2>{player.name}</h2>
                <p>{player.email}</p>
                <p>{player.role}</p>
            </div>
        ))}
        </>
    );
};

export default Roster;