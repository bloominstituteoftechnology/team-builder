import React from 'react'


const FamilyMember = (props) => {
    const {details} = props






    return (
        <div className="Family-member-container">
            <h2>{details.name} </ h2>
            <p>{details.age}</p>
            <p>{details.location}</p>
            <p>{details.relationship}</p>
        </div>
    )
}

export default FamilyMember