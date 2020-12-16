import React from 'react'

const Members = props => {
  return (
    <div>
      {props.members.map(member => (
        <div className="card">
          <div className="card-body">
          <h5 class="card-title">Name: {member.username}</h5>
          <p class="card-text">
          <h5>Email: {member.email}</h5>
          <h5>Role: {member.role}</h5>
          </p>
          
          </div>
        </div>
      ))}
    </div>
  )
      }

export default Members;

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>