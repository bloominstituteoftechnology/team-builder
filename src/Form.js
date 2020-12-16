import React, { useState } from 'react';
import {Button} from 'reactstrap';
import Team from './Team';

export default function Form (props) {

    const [formData, setFormData] = useState({
        fname: '',
        role: '',
    })

    const onInputChange = event => {
        // if(/^[a-zA-Z]+$/.test(event.target.value)){
            setFormData({
            ...formData,
            [event.target.name]: event.target.value
             })
        // }
    };

    return (
        <>
        <form className='joinForm'>
            <label> First Name 
                <input name='fname' onChange={onInputChange} value={formData.fname} type="text"  placeholder='First Name'/>
            </label>
            
            <label>
                Role: <select name='role' onChange={onInputChange} >
                    <option > CEO </option>
                    <option> VP of Product </option>
                    <option> VP of Operations </option>
                    <option> Director of Programs </option>
                </select>
            </label>

            <Button color='primary' size='lg' block>
                Join Us
            </Button>
        </form>
        </>
    )
}