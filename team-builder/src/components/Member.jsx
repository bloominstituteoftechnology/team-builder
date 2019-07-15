import React from 'react';

const Member = (props) => {
    const {name, age, occupation, favFood} = props.member
    return (
        <div>
            <h3>{name}</h3>
            <h5>{occupation}</h5>
            <p>{age}</p>
            <p>{favFood}</p>
        </div>
    );
};

export default Member;