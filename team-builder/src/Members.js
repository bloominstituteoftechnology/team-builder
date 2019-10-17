import React, {useState} from "react";

const Members= props => {
    console.log(props)
    
    return(
        <div>
         {props.membersProps.map((member, index) => {
             return(
                <div key={index}>
                    <h2>Name: {member.name}</h2>
                    <h3>Email: {member.email}</h3>
                    <h3>Role: {member.role}</h3>
                </div>
                )
            })}
        </div>
    )
}
export default Members;