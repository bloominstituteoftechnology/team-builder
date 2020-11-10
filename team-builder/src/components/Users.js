import React from 'react';

const Users = props => {
    return (
        <div>
            {props.users.map( (user, index) => (
                <div key={index}>
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.role}</p>
                    <p>Role: {user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Users