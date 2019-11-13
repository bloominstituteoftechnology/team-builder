import React from "react";

const MembersList = props => {
  return (
    <div className="membercard">
      <h1>{props.info.name}</h1>
        <div>
          <div>Email: {props.info.email}</div>
          <div>Role: {props.info.role}</div>
        </div>
        </div>
  );
};

export default MembersList;