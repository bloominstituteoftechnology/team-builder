import React from 'react';
import './User.css';

function User(props){

    const {name, email, role} = props;
    console.log();

    return (
       <div className='user-container'>
        <p>{name}</p>
        <p>{email}</p>
        <p>{role}</p>
        </div>  
    );
}

export default User;