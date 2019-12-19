import React from 'react';

    const Usrs = props => {
        return(
            <div>
                {props.things.map((things) => (
                    <div
                        key={things.id}>
                        <h2>{things.name}</h2>
                        <h3>{things.email}</h3>
                        <h3>{things.role}</h3>
                    </div>
                ))}
            </div>
        )
    }
    export default Usrs