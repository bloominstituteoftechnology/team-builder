import React from 'react'

export default function Members(props) {
    return (
        <div>
          {props.members.map(newmember=> {
              return(
                  <div>
                      <h2>{newmember.username}</h2>
                  </div>
              )
          })}  
        </div>
    )
}
