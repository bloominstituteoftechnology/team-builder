import React from "react";

const NewMember = props => {
  return (
    <>
      <div>
        {props.members.map(item => (
          <div className="member-card" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewMember;
