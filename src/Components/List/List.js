import React from "react";

const List = (props) => {
  return (
    <div className="listContainer">
      {props.data.map(user => {
        return (
          <div key={user.id} className="listCard" >
            <div className="userInfo">
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.role}</h3>
            </div>
            <button id={user.id} onClick={e => props.memberToEdit(e)}>
              Edit
            </button>
            <button id={user.id} onClick={e => props.Del(e)}>
              Delete
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default List;
