import React from 'react';

function User(props){

    const {name, email, role} = props;
    console.log();

    return (
       <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{role}</p>
        </div>  
    );
}

export default User;