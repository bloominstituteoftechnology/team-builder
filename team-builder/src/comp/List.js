import React from "react"

const List = props => {
    return (
        <div className="team-list">
            {props.member.map(i => (
                <div className="team" key={i.name}>
                    <h2>{i.name}</h2>
                    <h3>{i.email}</h3>
                    <h3>{i.role}</h3>
                </div>
            ))}
        </div>
    )
}

export default List