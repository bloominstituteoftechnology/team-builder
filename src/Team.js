import './App.css';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember';

export default function Team (props) {
    const {team} = props;

    return (
        <TeamContainer>
            {team.map((member)=>{
               return <TeamMember key={member.id} name={member.name}/>
            })}
        </TeamContainer>
    )
}

const TeamContainer = styled.div`
background-color: #EBF5FB;
width: 80%;
height: 80%;
display: flex;
flex-flow: column wrap;
justify-content: space-evenly;
`