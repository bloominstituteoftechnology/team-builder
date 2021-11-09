import React from 'react';

export default function Member({ details }){
    if(!details){
        return <h3>No new member available.</h3>
    }
    return(
        <div className="member-container">
            <h2>Name: {details.name}</h2>
            <h2>Email: {details.email}</h2>
            <h2>Role: {details.role}</h2>
        </div>
    )
}