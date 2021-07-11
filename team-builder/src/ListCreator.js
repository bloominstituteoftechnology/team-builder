import React from "react";
import './App.css';

const ListCreator = (props) =>
{
    return(
        <div>
            {props.teamData.map(member => (
                <PersonDetails key={member.id} teamMember={member}/>
            ))}
        </div>
    )
}

function PersonDetails(props){
    const {name, email, role} = props.teamMember;

    return(
        <div className="memberList">
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}

export default ListCreator;


