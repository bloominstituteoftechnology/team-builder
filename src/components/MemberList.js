import React from "react";

function MemberList(props) {
    return (
        <div>
            {props.members.map((member, index) => (
                <div className="member" key={index}>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>                 
            ))}
        </div>
    );
}

export default MemberList;