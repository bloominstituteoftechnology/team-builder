import React, {useState} from 'react';
import styled from 'styled-components';

const Label = styled.label`
    margin: 0 12px;
    color: #eae2e2;
    font-size: x-large;
    `
const Button = styled.button`
    margin-left:10px;
    padding: 7px 8px;
    border: 1px solid black;
    :hover{
        background-color: gray;
        transform: translateY(-1px);
    }
    :active {
        background:  light red;
                box-shadow: inset 0px 0px 5px #ff65a3;
         outline: none;
    }
`

const Forms = props => {
    console.log(`X`,props)
    const[team2, setTeam2] = useState({name: '', email: '',role: ''})
        
    const handleChanges = e => {
        setTeam2({...team2, [e.target.name]: e.target.value})
    }

    const  submitForm  = e => {
        e.preventDefault();
        props.addForm(team2)
        setTeam2({name: '', email: '', role: ''})
    }
    return(
        <form autoComplete="off" onSubmit={submitForm}>
            <Label htmlFor='name'>Name:</Label>
            <input
            id='name'
            type='text'
            name='name'
            onChange={handleChanges}
            value={team2.name}
            autoComplete="off"
            placeholder="your name..."
           
            />
            <Label htmlFor='email'>email:</Label>
            <input
            id='email'
            type='text'
            name='email'
            onChange={handleChanges}
            value={team2.email}
            autoComplete="off"
            placeholder="your email..."
            />
            <Label htmlFor='role'>role:</Label>
            <input
            id='role'
            type='text'
            name='role'
            onChange={handleChanges}
            value={team2.role}
            autoComplete="off"
            placeholder="your role..."
            />
            
            <Button type='submit'> Add Member</Button>
            </form>
    )
}
export default Forms;