import React from 'react'

const TeamCard = props => {

    const {person} = props
    console.log(person)

    return (
        <div>
            <h2>{person.person}</h2>
            <p>{person.role}</p>
            <p>{person.email}</p>
        </div>
    )
}

export default TeamCard