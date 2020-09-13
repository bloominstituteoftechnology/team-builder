import React from "react";
import styled from 'styled-components';

const TeamMemberCard = (props) => {

    const Wrapper = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const DataWrapper = styled.div `
        border: 3px solid red;
        border-radius: 10px;
        width: 50%;
        margin: 2rem;
        background: black;
    `;

    const Title = styled.h1 `
        color: white;
        text-shadow: 2px 2px 5px red;
    `;

    const SubTitle = styled.h2 `
        color: red;
        text-shadow: 2px 2px 5px grey;
    `;

    const Data = styled.p `
        color: grey;
        text-shadow: 2px 2px 5px red;
    `;

    return (
        <Wrapper>
            <Title>Team Member's List</Title>
            {props.teamMembers?.map((el, i) => {
                return(
                <DataWrapper key={ i }>
                    <SubTitle>{el.name}</SubTitle>
                    <Data>{el.role}</Data>
                    <Data>Joined in: {el.joined}</Data>
                </DataWrapper>
            )})}
        </Wrapper>
    );
};

export default TeamMemberCard;