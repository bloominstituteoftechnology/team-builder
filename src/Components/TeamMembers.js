import React from 'react';
import ReactDOM from 'react-dom';

const TeamMembers = props => {
    return(

        <div className="teammembers">
            {props.team.map((note,index) =>{
                return(
                    <div className = "note" key={index}>
                        <h1>{note.name}</h1>
                        <p>{note.email}</p>
                        <p>{note.role}</p>
                    </div>
                )
            })}


        </div>


    )
}

export default TeamMembers; 