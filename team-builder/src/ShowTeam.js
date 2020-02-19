import React from 'react';

function ShowTeam(props) {
    return (
        <>
            {props.people.map(person => {
                return (
                    <>
                        <h1>Name: {person.name}</h1>
                        <p>Email: {person.email}</p>
                        <p>Role: {person.role}</p>
                        <p>Home Town: {person.home_town}</p>
                    </>
                )
            })}
        </>
    )
}

export default ShowTeam;