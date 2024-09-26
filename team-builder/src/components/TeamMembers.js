import React, { useState } from 'react';

const TeamMembers = ({ teamMembers }) => {

    return (
        <div>
            {teamMembers.map((member, index) => {
            return (
                <div key={index}>
                    <h2>Name: {member.name}</h2>
                    <p>Email: {member.email} </p>
                    <p>Role: </p>
                </div> 
            )   
            })}
        </div>
    )
}

export default TeamMembers;