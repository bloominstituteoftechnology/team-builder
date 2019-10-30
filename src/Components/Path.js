import React from 'react'
import styled from "styled-components";

const Button = styled.button`
    font-size: 1.6rem;
    padding: 1%;
    margin: 1%;
    border-radius: 8px;
    background: black;
    color: white;

    &:hover{
        background: white;
        color: black;
        border: 1px solid black;
    }
`;

const Path = () => {
    return (
        <div>
            <a href="https://github.com/J2Macwilliams/team-builder">
                <Button>Code</Button>
            </a>
            <a href="https://j2macwilliams.github.io/My-Portfolio/">
                <Button>Portfolio</Button>
            </a>
            
        </div>
    )
}

export default Path
