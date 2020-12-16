import './App.css';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

export default function TeamMember (props) {
    const {name}=props;

    return (
        <TeamMemberCard> 
            <h2 className='member-text'>{name}</h2>
        </TeamMemberCard>
    )
}

const TeamMemberCard = styled.div`
border: solid blue 1px;
display: flex;
/* flex-flow: row wrap; */
justify-content: left;
padding-left: 20px;
height: 24%;
    .member-text{
        color: #0b24e0;
    }
`