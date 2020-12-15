import React from 'react';

export default function Team({details}){

    if (!details) {
        return <h3>Working fetching your Team Members&apos;s details...</h3>
      }

      return(
        <div className='team container'>
        <p>{details.firstname}</p>
        <span>{details.firstname}</span>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
      )

}