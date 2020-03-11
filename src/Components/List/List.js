import React from 'react';

const List = (props) => {
  console.log(props.data);
  console.log('name', props.data.name);
  return (
    <div>
      {props.data.map(user => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.role}</h3>
            <h4>Hi</h4>
          </div>
        )

      })
      }
    </div>
  )
}

export default List;