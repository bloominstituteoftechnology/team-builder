import React from "react";

const Usrs = props => {
    const { user} = props;
  return (
    <div>
        {props.user.map( u => (
        <div key={u.id}>
          <h3>{u.name}</h3>
          <h3>{u.email}</h3>
          <h3>{u.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Usrs;
