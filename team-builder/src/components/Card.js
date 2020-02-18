import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    padding-left: 10px;
    background: ${prop => prop.memberToEdit && prop.memberToEdit.id === prop.id ? "yellow" : "none"};
    button {
        width: 50%;
    }
`

const Card =  ({ id, name, role, nationality, editMember, memberToEdit }) => {

    return (
        <Container memberToEdit={memberToEdit} id={id}>
            <h3>Name: {name}</h3>
            <p>Role: {role}</p>
            <p>Nationality: {nationality}</p>
            <button onClick={() => editMember(id)}>Edit</button>
        </Container>
    );
}

export default Card;
