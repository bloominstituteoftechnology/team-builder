import React from "react"

const Card = props => {
    return(
        <div className="card-list">
            {props.teamMember.map(member => (
                <div className="card">
                <h2>{member.Name}</h2>
                <p>{member.Email}</p>
                <p>{member.Role}</p>
                </div>
            ))}
        </div>
     
    )
}

export default Card