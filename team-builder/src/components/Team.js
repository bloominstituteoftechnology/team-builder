import React from 'react'

export default function Team(props){

    return(
         <>
         { props.teamData.map((data, index) => (
                <div key={index}>
                    <h2>{data.name}</h2>
                    <p>{data.email}</p>
                    <p>{data.role}</p>
                </div>
            ))
        }
         </>
    )
}
