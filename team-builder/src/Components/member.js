import React from "react"

const Members = props => {
    return (
        <div className="member-list">
            {props.memberList.map(member => {
                return (
                    <div className="member" key={member.id}>
                        <h2>Name: {member.name}</h2>
                        <p>Role: {member.role}</p>
                        <p>Email: {member.email}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Members; 