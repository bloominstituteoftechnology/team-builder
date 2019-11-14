import React from "react"


const Team = props =>{
    return(
        <div>
            {props.members.map(value =>(
            <div className="teams" key={value.email}>
                <p className="name">Name: {value.name} </p>
                <p>Email: {value.email} </p>
                <p>Role: {value.role}</p>
            </div>
            ))}

        </div>
    )
}


  



export default Team;