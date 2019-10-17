import React from "react";

const Team = props => {
    console.log("Team.js", props.teamList);
    return(
        <div className='team-list'>
            {props.teamList.map((team, index) => {
                return(
                    <div className='team' key={index}>
                        <p>Name: {team.name}</p>
                        <p>Email: {team.email}</p>
                        <p>Role: {team.role}</p>
                    </div>
                );
            })}
        </div>
    );
};



export default Team;