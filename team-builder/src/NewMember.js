import React from 'react'
import Member from './Member'


function NewMember(props){




    return(
    <div>
        {props.teamMembers.map((member, index) => (
            <Member key={index} member={member}/>
        ))}
    </div>
    )



}














export default NewMember