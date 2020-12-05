import React, {useState} from 'react';

function Member(props) {
    return(
        <div>
                <h2>{props.teamMembers.name}</h2>
                <p>{props.teamMembers.email}</p>
                <p>{props.teamMembers.role}</p>
        </div>
    )
}
export default Member;