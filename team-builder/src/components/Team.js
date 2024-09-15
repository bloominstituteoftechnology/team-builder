import React from 'react';


const Team = props => {

    return (

        <div>
            {props.members.map(person => (

                <div>

                    <h3> Name: {person.name} </h3>

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