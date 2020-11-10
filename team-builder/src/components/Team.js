import React from 'react';
import styled from 'styled-components'

const TeamInfo = styled.div`
    border: 1px solid black;
    margin: 2% 0%;
    width: 30%;
    border-radius: 5px;
    display: flex;
    flex-direction: column; 
    height: fit-content;

    .team-container{
        display: flex;
        flex-direction: column;
        padding-bottom: 3%;
        text-align: center;
    }

    .name h3{
        font-size: 2rem;
    }
`
export default function Team(props) {
    const {details} = props

    if (!details) {
        return <h3>Working on getting your team...</h3>
    }

    return (
        <TeamInfo>
        <div className= 'team-container'>
            <div className="name">
                <h3>{details.name}</h3>
                <p>Email: {details.email}</p>
                <p>Role: {details.role}</p>
            </div>
        </div>
        </TeamInfo>
    )
}