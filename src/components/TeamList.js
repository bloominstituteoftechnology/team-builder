import React from 'react';



const TeamList = props => {
console.log("teamlist props->",props);
const changeHandler = teamMember => {
    props.handleEditMember(teamMember);
    
}
return (
    <div>
        <p>Current List of team Members</p>
        {props.team.map( teamMember => (
            <div>
                {/* {console.log(teamMember)} */}
                <h2>Name: {teamMember.name}</h2>
                <p>Email: {teamMember.email}</p>
                <p>Role: {teamMember.role}</p>
                <button 
                onClick={()=> {
                    props.handleEditMember(teamMember);
                    props.setIsEditing(true);
                    console.log("teamlist isEditing has value->",props.isEditing);
                }}
                value={teamMember.id}

                >
                Edit Details
                </button>
            </div>
        ))}
    </div>
);

}

export default TeamList; 