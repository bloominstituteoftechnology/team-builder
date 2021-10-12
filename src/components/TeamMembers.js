import React from 'react'

const TeamMembers = ({list}) => {

    console.log("LIST: ", list)

    return (
        <>
        {list && list.map(member => {
             return (
             <div>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p>
             </div>
             )
             
        })}
        </>
    )
}

export default TeamMembers
