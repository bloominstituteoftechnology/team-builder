import React from 'react'

const Team = props => {
    return(
        <div>
            Name: {props.name} <br/>
            Email: {props.email}<br/>
            Role: {props.role}<br/>
            <br/>
        </div>
    )
}

export default Team