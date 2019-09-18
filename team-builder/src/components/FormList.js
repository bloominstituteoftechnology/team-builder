import React from "react";

function FormList(props){
    return(
        <div>
            {
                props.members.map((member, index)=>(
                    <div className="listItem" key={index}>
                        <h2>{member.memberName}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>

                    </div>
                ))
            }

        </div>
    )
}

export default FormList;