import React from 'react';



const TeamList = props => {
// console.log("teamlist props->",props);
return (
    <div>
        <p>Current List of team Members</p>
        {/* {if(!props)
        
        } */}
        {props.team.map( teamMember => (
            <div>
                <h2>Name: {teamMember.name}</h2>
                <p>Email: {teamMember.email}</p>
                <p>Role: {teamMember.role}</p>
            </div>
        ))}
    </div>
);

}

export default TeamList; 