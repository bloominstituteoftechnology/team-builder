import React from 'react';



const Card = (props) => {

    

    return (
        <div className="card">
            
            <div>{props.Name}</div>
            <div>{props.Occupation}</div>
            <div>{props.Hobby}</div>

        </div>
    );
};



export default Card;