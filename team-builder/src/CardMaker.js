import React from 'react'

export default function cardMaker(props){
    const {teammate} = props
    
    return (
        <div className='cardContainer'>
        <div className="cardDiv">
            <h1 type='text'>{teammate.name}</h1>
            <h3 type='email'>{teammate.email}</h3>
            <h3>{teammate.age}</h3>
        </div>
        </div>
    )
}