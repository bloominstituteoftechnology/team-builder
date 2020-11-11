import React from 'react';
import styled from 'styled-components';


const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const StyledCards = styled.div`
    border: black 3px solid;
    border-radius: 10px;
    margin: 2%;
    padding: 1%;
    width: auto;
`

const Users = props => {
    return (
        <StyledList>
            {props.users.map( (user, index) => (
                <StyledCards key={index}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.role}</p>
                    <p>Role: {user.email}</p>
                </StyledCards>
            ))}
        </StyledList>
    );
}

export default Users