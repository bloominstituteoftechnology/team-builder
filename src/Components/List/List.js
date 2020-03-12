import React from "react";

const List = props => {
  let id = -1;
  return (
    <div key={id++} className="listContainer">
      {props.data.map(user => {
        return (
          <div className="listCard">
            <div className="userInfo">
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.role}</h3>
              <h4>Hi</h4>
            </div>
            <button id={id++} onClick={props.memberToEdit}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
