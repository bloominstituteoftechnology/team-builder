import React from "react";


const Team = props => {
    console.log(props)
    return (
      <div>
          {props.formData.map( user =>{
              return(
                  <div className="styling" key={user.id}>
                      <h2>{user.name}</h2>
                      <h3>{user.email}</h3>
                      <h4>{user.dob}</h4>
                  </div>
              )
          })}
      </div>
    );
}

export default Team;
