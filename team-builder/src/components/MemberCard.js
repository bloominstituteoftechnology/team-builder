import React from 'react';

const MemberCard = props => {
    const {setMemberToEdit, member: {name, email, role}} = props;
    return (
        <div>
            {name} {email} {role}
            <button onClick={() => setMemberToEdit(props.member)}>edit</button>
        </div>
    )
}

export default MemberCard;