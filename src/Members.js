import React from 'react';

const Members = props => {
    return (
        
            props.members.map((member,i) => {
               return <div key={i}>{member}</div>
            }
                
            

            

            

            
            )
    )
};

export default Members;
