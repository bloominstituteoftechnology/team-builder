import React from "react"

const Member = props => {
    console.log(props)
    return (
        <div className='member-list'>
            {props.memberList.map((member, index) => {
                return (
                    <div className='member' key={index}>
                        <h3>{member.name}</h3>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default Member; 