import React from 'react';

const Main = props => {
    return (
        <div>
            { props.team.map(person => (
                <div>
                    <h3> Name: {person.name}</h3>
                    <h3> Role: {person.role}</h3>
                    <h3>Email: {person.email}</h3>
                </div>
            ))}
        </div>
    );
} //  MAPPING OVER EACH PERSON AND RENDERING THE DATA IN AN H3

 export default Main 