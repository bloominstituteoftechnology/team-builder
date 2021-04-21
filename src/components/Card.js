import React from 'react';

export default function Card(props) {

  const { data } = props

  if (!data) return;

  return (
    <div className='member container'>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Role: {data.role}</p>
    </div>
  )

}
