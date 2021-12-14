import React from "react";

export default function Member(props){
    const {details} = props




    return(
        <div>
        <h2>{details.membername}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
}