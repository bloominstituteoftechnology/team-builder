import React from 'react'




const Member = (props) =>{

      

    return(
        <div>
            {props.member.map(member =>(
            <div>
             <h2>Name: {member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p> 
            </div>  
            ))}
            
        </div>
    )
}



export default Member










