import React, {useState} from 'react'


const TeamMember = props =>{
    return(
        <div className='teamList'>
            {props.person.map(person =>(
                <div key={person.id} className='person'>
                    <h2>{`${person.firstName}  ${person.lastName}`}</h2>
                    <h3>{person.role}</h3>
                    <p>{person.email}</p>
                </div>
            ))

            }
        </div>
    )
}

export default TeamMember