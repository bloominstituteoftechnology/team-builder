import React from 'react';

export default function TeamList(props) {
  const { teamList } = props;
  return (
    <div>
    {teamList.map(member => (
      <div>
      <p>Name : {member.Name}</p>
      <p>Email : {member.Email}</p>
      <p>Position : {member.Position}</p>
      </div>
    ))}
    </div>
  );
};
