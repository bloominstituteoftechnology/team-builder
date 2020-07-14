import React from 'react';
const TeamMember = (props) => {
    const {details} = props
    
    // if (!details) {
    //     return <h3>Help we can't find your team member!</h3>
    // }
    
    return(
        <div className = 'member-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}
export default TeamMember;