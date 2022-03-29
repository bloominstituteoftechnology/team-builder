import React from 'react';

export default function List(props) {
const {members} = props;


return (
    <div className='container'>
        <h1>Name: {members.name}</h1>
        <div className='data-holder'>
            <p>Email: {members.email}</p>
            <p>Role: {members.role}</p>
        </div>
    </div>
)
}