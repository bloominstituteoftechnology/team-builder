import React from "react";


const Team = props => {
    console.log(props)
    return (
      <div>
          {props.formData.map( item =>{
           console.log(item)
          
           return(
                  <div className="styling" key={item.id}>
                      <h2>{item.name}</h2>
                      <h3>{item.email}</h3>
                      <h4>{item.dob}</h4>
                  </div>
              )
            })}
      </div>
    );
}

export default Team;
