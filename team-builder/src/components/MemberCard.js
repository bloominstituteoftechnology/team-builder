import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
max-width: 50%;
height: auto;
padding: 2%;
background-color: purple;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
`

export default function MemberCard(props){
    return(
        <Box>
            <h1>{props.fname} {props.lname}</h1>
            <h2>{props.job}</h2>
            <h3>{props.email}</h3>
        </Box>
    )
}