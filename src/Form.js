import React from 'react';

export default function Form (props) {

    return (
        <form className='join-form'>
            <label htmlFor='fnameInput'> First Name 
                <input id='fname' onChange={ evt => {
                    debugger
                }

                }type="text" name="name" placeholder='First Name'/>
            </label>
            
            <label>
                Role: <select id='roleSelect'>
                    <option > CEO </option>
                    <option> CPO </option>
                    <option> VP of Ops </option>
                    <option> Director of Programs </option>
                </select>
            </label>
            ß
            <label>
                <input id='inputButton' type="submit" value="Join" />
            </label>

            <label>
                Interested? <input id='interested' type='checkbox'></input>
            </label>
            
        </form>
    )
}