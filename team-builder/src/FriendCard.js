import React from 'react'

export default function FriendCard(props) {
    const {details}=props

    if(!details) {
        return <h3>Still working on finding friends...</h3>
    }

    return(
        <div className='friendContainer'>
            <h2>{details.friendName}</h2>
            <p>Email: {details.email}</p>
            <p>Current Roll: {details.roll}</p>
        </div>
    )
}