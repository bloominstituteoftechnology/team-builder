import React from "react";

const Members = props => {
    return(
        <div className="member-list">
            {props.members.map(member =>(
                <div className="member" key={member.id}>
                        <div className="member-list">
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                         <p>{member.role}</p>
                        </div>
                </div>
            ))}
        </div>
    )
 
}; 


export default Members;