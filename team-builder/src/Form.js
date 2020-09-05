import React from 'react';

const MemberForm = (props) => {
    console.log("MemberForm props:" , props);

    return (
        <div className = "member-list">
            {props.member.map((member) =>{
                <div className = "member" key = {member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>

            })}
        </div>
    )
};

export default MemberForm;