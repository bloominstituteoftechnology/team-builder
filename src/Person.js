import React from 'react';

export default function Person(props) {
    const { details } = props;

    if(!details) {
        return <h1>This is WORKing</h1>
    }
    return (
        <div className='container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Favorite Sport: {details.role}</p>
        </div>
    )
}