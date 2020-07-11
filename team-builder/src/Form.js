import React from 'react';
import App from './App';

function Form(){

    return(
    <form>
        <label>Name: 
        <input type='text' placeHolder='Name' name='name' id='nameInput'></input>
        </label>
        <label>Email: 
        <input type='text' placeHolder='Email' name='email' id='emailInput'></input>
        </label>
        <label htmlFor='selectRole'>Role: 
        <select id='selectRole' name='role'>
            <option value='1'>Computer Programmer</option>
            <option value='2'>Web Developer</option>
            <option value='3'>DataBase Administrator</option>
            <option value='4'>Software Developer</option>
            <option value='5'>Other</option>
        </select>
        </label>
    </form>
    )
} 

export default Form;