import React, {useState} from "react";

function Form(props) {

const {submit, update, list} = props;

    return (
        <div>
            <form onSubmit={submit}>
                <label>Name
                <input
                    onChange={update}
                    maxLength='20'
                    placeholder='Name'
                    name='name'
                    type='text'
                />
                </label>
                <label>Email
                <input
                    onChange={update}
                    maxLength='30'
                    placeholder='Email'
                    name='email'
                    type='text'
                />
                </label>
                <label>Role
                <input
                    onChange={update}
                    maxLength='10'
                    placeholder='Role'
                    name='role'
                    type='text'
                />
                </label>
                <input 
                    type='submit'
                    value='Submit'
                />
            </form>
            {list.map((friend, key) => <li key={key}>Name: {friend.name} Email: {friend.email} Role: {friend.role}</li>)}
        </div>

        
    )
}

export default Form;