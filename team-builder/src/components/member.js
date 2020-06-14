import React from 'react';

const Member = props => {
    return (
        <div className='membersBox' >
            {props.membersList.map(member => {
                return (
                    <div className='memberDiv'key={member.id}>
                        <div className= 'member-info' >
                            <p>First Name: {member.fname}</p>
                            <p>Last Name:{member.lname}</p>
                            <p>E-mail: {member.email}</p>
                            <p>Profession: {member.profession}</p>
                        </div>
                        <div className="removeBtn" >
                            <button id='remove-btn' onClick={() => props.delMemberFn(member.id)}>x</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Member;