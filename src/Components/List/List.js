import React from "react";

const List = (props) => {
  console.log(props);
  return (
    <div className="listContainer">
      {props.data.map(user => {
        return (
          <div className="listCard" >
            <div className="userInfo">
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.role}</h3>
            </div>
            <button onClick={event => props.memberToEdit(event)}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
