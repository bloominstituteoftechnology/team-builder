import React from 'react'


const TeamCard = props => {

    return (

        <div>
            {props.teamMate.map(teamMate => (
                <div>
                    <h1>{teamMate.name}</h1>
                    <p>{teamMate.role}</p>
                    <p>{teamMate.email}</p>
                </div>
            ))}
        </div>

    )

}

export default TeamCard;
