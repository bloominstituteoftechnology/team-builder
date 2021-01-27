import React from 'react';

export default function Form (props){
    const { users, update, submit } = props

    return(
        <form onSubmit={submit}>
            <label>
                Add a Name: 
                <input type="text" name='name' onChange={update} value={users.name} placeholder="Enter Name"></input>
            </label>
            <label>
                Add an Email: 
                <input type="email" name='email' onChange={update} value={users.email} placeholder="Enter Email"></input>
            </label>
            <label>
                Role:
                <select name="role" onChange={update} value={users.role}>
                    <option>===Select Role===</option>
                    <option value="Demo">Demo</option>
                    <option value="Scout">Scout</option>
                </select>
            </label>
            <button>Submit</button>

        </form>
    )
}