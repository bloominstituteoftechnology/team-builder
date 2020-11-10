import React from 'react';
import theTeam from "./Data"


 const Team = props => {



    return (

        <div> 
           { props.members.map(peeps => (
               <div>
                    <h2> name: {peeps.name} </h2>
                    <ul>
                        <li> Role: {peeps.role}</li>
                        <li> Email: {peeps.email}</li>
                    </ul>

               </div>

           )) }      
         </div>

    );


 } 

 export default Team  