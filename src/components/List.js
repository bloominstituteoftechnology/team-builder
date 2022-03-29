import React from 'react';

export default function Form(props) {
const {members} = props;


return (
    <div className='container'>
        <h1>Name: {members.name}</h1>
        <div>
            <p>Email: {members.email}</p>
            <p>Role: {members.role}</p>
        </div>
    </div>
)
}