import React from 'react';



const TeamList = props => {
   
    return (

        <div>

            {props.teamList.map(member => {

                return (

                    <div key = {member.id}>
                        
                        <br />


                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p>{member.email}</p>

                    <br />
                    <hr />

                    </div>
                )
            })}

        </div>
    )
}

export default TeamList; 