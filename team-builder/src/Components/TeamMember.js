import React, {useState} from 'react'


const TeamMember = props =>{
    return(
        <div className='teamList'>
            {props.person.map(person =>(
                <div className='person'>
                    <h2>{`${person.firstName}  ${person.lastName}`}</h2>
                </div>
            ))

            }
        </div>
    )
}

export default TeamMember