import React from 'react'
import styled from 'styled-components';

const TeamMemberStyled = styled.div`
    border: 1px solid #CCC;
    display: inline-block;
    padding: 10px;
    margin-top: 20px;
    max-width: 500px;
    width: 90%;
`;

const TeamMember = ({ member }) => {
    return (
        <TeamMemberStyled>
            <h3>{ member.name }</h3>
            <p>Email: { member.email }</p>
            <p>Age: { member.age }</p>
            <p>Role: { member.role }</p>
        </TeamMemberStyled>
    )
}

export default TeamMember
