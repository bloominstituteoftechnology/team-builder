import React from 'react';

const Members = props => {
    return(
        <div className="note-list">
    {props.engineer.map(member => (
      <div className="note" key={member.id}>
        <h2>{member.name}</h2>
        <p>{member.title}</p>
      </div>
    ))}
  </div>
    );
}
export default Members