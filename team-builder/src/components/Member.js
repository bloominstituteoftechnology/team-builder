import React from 'react';

export default function Member(props){
  const {name, email, role} = props.member;
  return (
    <div className='card'>
      <h3 className='name'>{name}</h3>
      <p>{email}</p>
      <p>{role}</p>
    </div>
  )
};