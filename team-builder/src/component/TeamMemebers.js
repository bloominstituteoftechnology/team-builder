import React from 'react';
import ReactDOM from 'react-dom';




const TeamMemebers = props => {
    return(

        <div className = "teammemebers">
            {props.team.map((note, index) => {
                return(
                    <div className = "note" key={index}>
                        <h1>{note.name}</h1>
                        <p>{note.Email}</p>
                        <p>{note.role}</p>
                        <button> Edit</button>
                        </div>
                        
                )
            })}
            


        </div>

    )
}

export default TeamMemebers;