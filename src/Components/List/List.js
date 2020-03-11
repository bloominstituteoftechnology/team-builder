import React from 'react';

const List = (props) => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <h2>{props.user.email}</h2>
      <h3>{props.user.role}</h3>
    </div>
  )
}

export default List;