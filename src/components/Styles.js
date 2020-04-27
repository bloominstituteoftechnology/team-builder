import styled from "styled-components";

export const Name = styled.p `
    font-size: 28px;
    font-weight: bold;
    color: white;
`

export const Email = styled.p `
    font-size: 24px;
    font-weight: bold;
    color: white;
`

export const Role = styled.p `
    font-size: 22px;
    font-weight: bold;
    color: white;
`

export const Card = styled.div `
    border: 3px solid black;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2a6592;
    color: white;
    margin-bottom: 8px;
`
export const Input = styled.div `
    border: 3px solid black;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2a6592;
    color: white;
    justify-content: space-between;
    margin-bottom: 8px;
`

export const Label = styled.label `
    font-size: 20px;
    font-weight: bold;
`

export const Button = styled.button `
    font-weight: bold;
    :hover {
        background-color: #db9833;
    }
`
export const Page = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Type = styled.input `
    &:focus {
        background-color: #db9833;
    }
`