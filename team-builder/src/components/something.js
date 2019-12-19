import React from 'react';

    const Usrs = props => {
        return(
            <div className="usr-lst">
                {props.info.map(usr => (
                    <div className="usr" key={usr.id}>
                        <h2>{usr.username}</h2>
                        <h3>{usr.email}</h3>
                        <h3>{usr.role}</h3>
                    </div>
                ))}
            </div>
        )
    }
    export default Usrs