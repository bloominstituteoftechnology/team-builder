import React from "react";

const List = (props) => {
  return (
    <div className="listContainer">
      {props.data.map(user => {
        return (
          <div key={user.id} className="listCard" >
            <div className="userInfo">
              <h1>{user.name}</h1>
              <h3>Email: {user.email}</h3>
              <h3>Role: {user.role}</h3>
              <h3>Team: {user.teamNumber}</h3>
            </div>
            <button id={user.id} onClick={e => props.memberToEdit(e)}>
              Edit
            </button>
            <button id={user.id} onClick={e => props.removeMember(e)}>
              Delete
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default List;
