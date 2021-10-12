import { useState } from 'react';

function Form () {
    return(
        <form>
            <label>Name: 
                <input 
                type='text'
                name='name'
                placeholder='Enter a name'
                />
            </label>
            <br/>
            <label>Email: 
                <input 
                type='email'
                name='email'
                placeholder='Enter an email'
                />
            </label>
            <br/>
            <select>
                <option>--Select a Role--</option>
                <option>Engineer</option>
                <option>Student</option>
                <option>.</option>
            </select>
        </form>
    )
}

export default Form