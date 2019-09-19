import React from 'react';

const Member = props => {
    return(
        
       <div>
            {props.team3.map(teams => (

                <div className='teams' key={teams.id}>

                     <h2>{teams.name}</h2>
                     <p>{teams.email}</p>
                     <p>{teams.role}</p>
                </div>
            ))}
        </div>
    )
}
export default Member;