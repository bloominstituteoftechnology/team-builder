import React, { useState } from 'react';
import styled from 'styled-components';

const Form = (props) => {
    console.log('form: ', Form);
    const FormStyle = styled.form `
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    `;

    const Label = styled.label `
        color: red;
        font-weight: bolder;
        margin-bottom: 5px;
        text-align: left;
        width: 200px;
        text-shadow: 1px 1px 2px grey;
    `;

    const Input = styled.input `
        width: 200px;
        padding: 12px 20px;
        margin: 10px 5px;
        box-sizing: border-box;  
        border: 2px solid grey;
        color: red;
        background-color: black;
        border-radius: 8px;
        outline: none;
    `;

    const Button = styled.button `
        &:hover {
            color: white;
            outline: none;
        }
        &:active {
            background: grey;
            border: 1px solid white;
            border-radius: 10px;
            padding: 5px 25px;
            font-size: 14px;
            font-family: tahoma;
            font-weight: bolder;
            color: red;
            box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12), 0 2px 2px 1px rgba(0, 0, 0, 0.24);
            outline: none;
        }
        background: red;
        border: 1px solid grey;
        border-radius: 10px;
        padding: 5px 25px;
        font-size: 14px;
        font-family: tahoma;
        font-weight: bolder;
        color: black;
        box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.12), 0 2px 2px 1px rgba(0, 0, 0, 0.24);
        transition: all 0.2 ease-in;
        margin-bottom: 50px;
        outline: none;
    `;

    const year = new Date();
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        role: '',
        joined: year.getFullYear(),
    });

    const changeHandler = (evt) => {
        console.log(evt);
        setNewMember({
            ...newMember,
            [evt.target.name]: evt.target.value
        });
    };

    const submitForm = (evt) => {
        evt.preventDefault();
        props.setNewMember(newMember);
        setNewMember({ name: '', email: '', role: '' });
    };

    return(
        <FormStyle onSubmit={ submitForm } >
            <Label htmlFor="name">Enter Your Name</Label>
            <Input type="text" name="name" value={ newMember.name } onChange={ changeHandler } />

            <Label htmlFor="email">Enter Your E-Mail</Label>
            <Input  type="text"name="email" value={ newMember.email } onChange={ changeHandler }/>

            <Label htmlFor="role">Enter Your Role</Label>
            <Input type="text" name="role" value={ newMember.role} onChange={ changeHandler }/>

            <Button>Submit</Button>
        </FormStyle>
    )
}

export default Form; 