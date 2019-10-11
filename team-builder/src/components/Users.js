import React from 'react';

const Users = props => {
  console.log(props)

  if(props.addUserCB){
    return(
      <div>
        {props.addUserCB.map(user => {
          return (
            <div>
              <h2>{user.name}</h2>
              <p>{user.id}</p>
              <p>{user.email}</p>
              <p>{user.role}</p>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <p>No Users</p>
  );
}

export default Users;