import React from 'react';


 function List (props) {



    return (

<div>
    {props.inputMembers.map( member =>  (

        

                 <li key={member.id} >Member: {member.member} | Role: {member.role} | Email: {member.email}  </li>
    
    )
            )
        }
    </div>
 )}

 export default List;