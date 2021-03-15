import React from 'react'

 function Member(props){
    return(
        <div>
            <p>{props.member.name}</p>
            <p>{props.member.email}</p>
            <p>{props.member.role}</p>
        </div>
    )
}

export default Member