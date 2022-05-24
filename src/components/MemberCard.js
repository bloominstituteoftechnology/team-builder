import React from 'react';
import styled from 'styled-components';

const MemberDiv = styled.div`
    border-radius: 1rem;
    border: solid 1px gray;
    box-shadow: .1rem .1rem .5rem gray;
    width: fit-content;
    padding: .5rem;
    margin: 1rem auto;
`

const MemberCard = (props) =>{
    const {name, email, role} = props;

    return (
        <MemberDiv>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </MemberDiv>
    )
}

export default MemberCard;