import React from "react";

const TeamMembers = props => {
    return (
        <div>
            {props.teamList.map((person,index) => {
                return (
                    <div key={index}>
                        <h2>{person.name}</h2>
                        <p>{person.email}</p>
                        <p>{person.role}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;