import React from 'react';


//do I define character details here?

export default function Character(props){
    const {newData}= props;
    return(
        <div>
          <h1>{props.name}</h1>  
          <h1>{props.position}</h1>
          <h1>{props.type}</h1>
        </div>
    )
};