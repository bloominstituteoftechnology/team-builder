import React from 'react';
import TeamData from "./TeamData"


 const Team = props => {



    return (

        <div> 
           { props.members.map(param => (
               <div>
                    <h2> name: {param.name} </h2>
                    <ul>
                        <li> Role: {param.role}</li>
                        <li> Email: {param.email}</li>
                    </ul>

               </div>

           )) }      
         </div>

    );


 } 

 export default Team 