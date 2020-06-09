import React from "react";

const Members = props => {
    return (

        <div className="member-list" >
            {props.members.map(member => (
                <div className="member-card" key={member.id}>
                    <h1>Name: {member.name}</h1>
                    <h5>E-Mail: {member.email}</h5>
                    <h5>Role: {member.role}</h5>
                </div>
            ))}
        </div>
    );
};
export default Members;