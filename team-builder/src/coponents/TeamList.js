import React from 'react'
import styled from 'styled-components'

export default function TeamList({ member }) {

    const Div = styled.div `
    display:flex;
    flex-direction:column;
    background:white;
    margin:2% auto;

    
    `
    
    
    return (
        <Div>
            <h3> {member.fname} </h3>
            <h4> {member.lname} </h4>
            <p> {member.fname} play {member.position} and is currently {member.status} </p>

            
            
            
        </Div>
    )
}
