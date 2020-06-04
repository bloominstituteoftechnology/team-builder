import React from 'react';



const TeamList = props => {
console.log("teamlist props->",props);
const changeHandler = event => {
    // event.preventDefault();
    props.isEditClicked(event.target.value);
    // console.log("From TeamList, isEditClicked->",props.isEditClicked);
    // console.log("event.target.value->",event.target.value);
    props.setMemberToEdit(event.target.value);
}
return (
    <div>
        <p>Current List of team Members</p>
        {props.team.map( teamMember => (
            <div>
                <h2>Name: {teamMember.name}</h2>
                <p>Email: {teamMember.email}</p>
                <p>Role: {teamMember.role}</p>
                <button 
                onClick={changeHandler}
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