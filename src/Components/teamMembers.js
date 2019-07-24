import React from "react";


function teamMembers(props) {
return(
    <div>
    <h2>
    {props.member.name}
    </h2>
    <h3>
        {props.member.email}
    </h3>
    <h3>
        {props.member.role}
    </h3>
    </div>
)
}



export default teamMembers; 