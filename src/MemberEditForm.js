import React from 'react';
import styled from 'styled-components';

const MemberEditForm = (props) => {

    return (
        <div>
            <h1>This is my edit form</h1>
            <form>
                <label>Name
                <input type='text' placeholder='name' id='name' /></label>
                <label>Email
                <input type='email' placeholder='email' id='email' /></label>
                <label>Title Role <select id='role'>
                    <option>Frontend Engineer</option>
                    <option>Backend Engineer</option>
                    <option>Designer</option>
                    <option>Lead</option>
                </select>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

export default MemberEditForm;