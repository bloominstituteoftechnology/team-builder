import React from "react";

const People = props => {
    return (
    <div className="person-list">
        {props.person.map(peep => (
            <div className='person' key={peep.id}>
                <h2>{peep.name}</h2>
                <p>{peep.email}</p>
                <p>{peep.role}</p>
                </div>
        ))}
    </div>
    );
}

export default People; 