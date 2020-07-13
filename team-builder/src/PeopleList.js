import React from 'react';


const PeopleList = props => {

  


  


    return (
       
        
        //For this, why does props.list.map work, but not props.list.forEach?
        <div className="peopleList">
           <h1>Team Members:</h1>
            {props.list.map( (person, i) => (
                <div className="personCard" key={i}>
                     <p>Name: {person.name}</p>
                     <p>Email: {person.email}</p>
                     <p>Role: {person.role}</p>
                </div>
              
        ))}
        
        </div>
        
    );


}

export default PeopleList;