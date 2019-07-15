import React from 'react';

const Member = (props) => {
    const {name, age, occupation, favFood, email} = props.member
    return (
        <div>
            <h3>{name}</h3>
            <h5>{occupation}</h5>
            <p>{age}</p>
            <p>{email}</p>
            <p>{favFood}</p>
            <button onClick={() => props.editMember(name)}>Edit</button>
        </div>
    );
};

export default Member;