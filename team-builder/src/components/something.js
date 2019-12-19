import React from 'react';

    const Usrs = props => {
        return(
            <div className="usr-lst">
                {props.inf.map(user => (
                    <div className="usr" key={user.id}>
                        <h2>{user.username}</h2>
                        <h3>{user.email}</h3>
                        <h3>{user.role}</h3>
                    </div>
                ))}
            </div>
        )
    }
    export default Usrs