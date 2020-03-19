import React from 'react-dom';

const Members = props => {
    console.log(props);
    return (
        <div>
        {/* <div className='member-list'>
            {props.members.map(members => (
                <div className='member' key={members.id}>
                    <h2>{members.name}</h2>
                    <p>{members.email}</p>
                </div>
            ))}
        </div> */}
        </div>
    );
};

export default Members;
