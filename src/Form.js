import React from 'react';

export default function Form (props) {

    return (
        <form className='join-form'>
            <input id='input-name' type="text" name="name" placeholder='First Name'/>
            <input id='input-name-button' type="submit" value="Join" />
        </form>
    )
}