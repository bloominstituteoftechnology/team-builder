import React from "react";

const List = props => {
    return (
      <div className="note-list">
        {props.teamMembers.map(teamMember => (
          <div className="note" >
            <h2>{teamMember.name}</h2>
            <p>{teamMember.lastName}</p>
            <p>{teamMember.email}</p>
          </div>
        ))}
      </div>
    );
  };
export default List;


