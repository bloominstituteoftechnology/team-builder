import React from 'react';
import axios from '../axios';

export default function TeamForm(props) { 
    // destructure props
    const {values, update, submit} = props; 

    // form events with methods passed from App.js
    const onChange = (e) => { 
        const {name, value} = e.target;
        update(name, value);
    }

    const onSubmit = (e) => { 
        e.preventDefault(); 
        // axios.post('sampleapi.com', values)
        submit();
    }

    // JSX return 
    return (
        // onSubmit function called above
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group input'>
                {/*INPUTS*/}
                <label> First Name
                    <input
                        type='text'
                        name='fname'
                        onChange={onChange}
                        value={values.fname}
                        placeholder='first name'
                        maxLength='15'
                    ></input>
                </label>
                <label> Last Name
                    <input
                        type='text'
                        name='lname'
                        onChange={onChange}
                        value={values.lname}
                        placeholder='last name'
                        maxLength='15'
                    ></input>
                </label>
                <label> Email
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='email'
                        maxLength='30'
                    ></input>
                </label>
                {/*DROPDOWN*/}
                <label>Role
                    <select 
                    name='role' 
                    value={values.role} 
                    onChange={onChange}>
                        <option value="">--SELECT--</option>
                        <option value="designer">UX/UI Designer</option>
                        <option value="front-end">Front-End Developer</option>
                        <option value="back-end">Back-End Developer</option>
                        <option value="lead">Team Lead</option>
                    </select>
                </label>

                {/*SUBMIT BUTTON*/}
                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )

}