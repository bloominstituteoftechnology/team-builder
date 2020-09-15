import React from 'react';
// import Data from "./Data"


const Team = props => {

    return (

        <div>
            {props.members.map(person => (

                <div>

                    <h2> Name: {person.name} </h2>

                    <ul>

                        <li> Role: {person.role}</li>

                        <li> Email: {person.email}</li>

                    </ul>

                </div>

            ))}

        </div>

    );

}

export default Team