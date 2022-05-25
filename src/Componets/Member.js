import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Working fetching your member details...</h3>
  }

  return (
    <div className='member container'>
      <p>Name: {details.first_name} {details.last_name}</p>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <br></br>
    </div>
  )
}

export default Member;