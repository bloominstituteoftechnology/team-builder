import React from 'react';

export default function Team({details}){

    if (!details) {
        return <h3>Working fetching your Team Members&apos;s details...</h3>
      }

      return(
        <div className='team container'>
        <span>{details.firstname} </span>
        <span>{details.lastname}</span>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
      )

}