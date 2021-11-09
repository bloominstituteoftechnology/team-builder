import React from 'react';

export default function Member({ details }){
    if(!details){
        return <h3>No new member available.</h3>
    }
    return(
        <div>
            <h2>{details.name}</h2>
            <h2>{details.email}</h2>
            <h2>{details.role}</h2>
        </div>
    )
}