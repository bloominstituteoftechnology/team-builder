import React from 'react';

const Teams = props => {
    
    return(
        <div>
        {props.teamList.map((team, index) => {
            return(
                <div key={index}>
                <h2>{team.title}</h2>
                <p>{team.body}</p>
                </div>
            )
        })}
        </div>
    )
}

export default Teams;