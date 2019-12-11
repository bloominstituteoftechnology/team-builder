import React from 'react';

import './members.css';

const Members = props => {
    return (
        <div className='members'>
        {props.membersList.map(member => {
            return (
                <div>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>
            )
        })}
        </div>
    );
};

export default Members;