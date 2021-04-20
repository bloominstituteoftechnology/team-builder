import React, { useState } from 'react';

const TeamMembers = ({ teamMembers }) => {

    return (
        <div>
            {teamMembers.map(member => {
            return (
                <div>
                    <h2>Name: </h2>
                    <p>Email: </p>
                    <p>Role: </p>
                </div> 
            )   
            })}
        </div>
    )
}

export default TeamMembers;