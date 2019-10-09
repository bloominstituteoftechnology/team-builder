import React from 'react';

const Member = props =>{
    return(
        <div>
            {props.membersList.map(member =>{
                return(
                <div key={member.id}> 
                    <h2> {member.name} </h2>
                    <button onClick={() => props.delMemberFn(member.id)}>Remove</button>
                </div>
                );
            })}
        </div>
    );
};
export default Member;