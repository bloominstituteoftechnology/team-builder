import React from 'react';
import styled from 'styled-components';

const MemberEditForm(props) => {

    return (
        <form>
            <label>Name</label>
            <input type='text' placeholder='name' id='name' />
            <label>Email</label>
            <input type='email' placeholder='email' id='email' />
            <label>Title Role <select id='role'>
                <option>Frontend Engineer</option>
                <option>Backend Engineer</option>
                <option>Designer</option>
                <option>Lead</option>
            </select>
            </label>

        </form>
    )
};

export default MemberEditForm;