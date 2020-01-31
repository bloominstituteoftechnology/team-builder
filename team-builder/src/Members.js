import React from "react";

const Members = props => {

    return (
    <div>
        {props.memberList.map(mem => {
            return (
            <div 
                key={mem.id}>
                <h2>{mem.name}</h2>
                <p>E-mail: {mem.email}</p>
                <p>Role: {mem.role}</p>
                <button onClick={() => props.deleteMember(mem.id)}>Delete</button>
            </div>
            );
        })}
    </div>
    );
};

export default Members;