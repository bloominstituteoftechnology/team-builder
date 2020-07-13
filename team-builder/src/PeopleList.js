import React from 'react';


const PeopleList = props => {


    return (
        console.log("list", props.list),
        
        //For this, why does props.list.map work, but not props.list.forEach?
        <div>
           <h1>Team Members:</h1>
            {props.list.map( (person) => (
                <div>
                     <p>Name: {person.name}</p>
                     <p>Email: {person.email}</p>
                     <p>Role: {person.role}</p>
                </div>
              
        ))}
        
        </div>
        
    );


}

export default PeopleList;