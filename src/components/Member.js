import React from 'react';

const Member = props => {
    return (
        <div className="members-list">
            {props.members.map((member, id) => (
                <div className="staff" key={member.id}>
                    <h1>{member.name}</h1>
                    <h1>{member.email}</h1>
                    <h1>{member.role}</h1>
                </div>
            ))}

        </div>
    )
}

export default Member;