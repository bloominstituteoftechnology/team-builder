import React from 'react';

const FormInfo = props => {
    console.log(props.Members.map);
    return (
        <div>
            {props.members.map(info => (
                <div key={info.id}>
                    <h2>{info.name}</h2>
                    <p>{info.email}</p>
                    <p>{info.role}</p>
                </div>
            ))}
        </div>
    )
};
export default FormInfo;