
import React, { useEffect } from 'react'

export default function FriendCard(props) {
    const { details, update } = props

    useEffect(()=>{
        console.log('use effect')
    },[update]);

    if(!details) {
        return <h3>Still working on finding friends...</h3>
    }

    

    return(
        <>
            <div className='friendContainer'>
                <h2>{details.friendName}</h2>
                <p>Email: {details.email}</p>
                <p>Current Roll: {details.roll}</p>
            </div>
            <div className='buttonContainer'>
                <button onClick={update} value={details.id}>Edit Friend</button>
            </div>
        </>
    )
}