import React from 'react'


function Team(props){

     return(
          <>
          {
               props.teamData.map(data => (
                    <div key={data.id}>
                         <h2>{data.name}</h2>
                         <p>{data.email}</p>
                         <p>{data.role}</p>
                    </div>
               ))
          }
          </>
     )
}

export default Team