import React from "react";

const Member = props => {
    const edit = e => {
        e.target.contentEditable = "true";
        e.target.focus();
    };

    return (
        <div>
            {props.memberList.map((person, index) => {
                return (
                    <div className="member" key={index}>
                        <h2 onClick={edit}>{person.name}</h2>
                        <p onClick={edit}>{person.email}</p>
                        <p onClick={edit}>{person.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Member;
