
import React from 'react'
import TeamCard from './TeamCard'

const CurrentTeam = props => {

    const {team} = props

    return (
        <div>
            {team.map(person => {
                return (
                    <TeamCard key={person.id} person={person}/>
                )
            })}
        </div>
    )
}

export default CurrentTeam