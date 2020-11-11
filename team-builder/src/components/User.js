import React from 'react'

const User = (props) => {
    console.log(props.team)

    
    const userData = [
        {
            memberName: 'lyub',
            memberEmail: 'cool@net.com',
            memeberRole: 'fullstack'
        }
    ]
    userData.push(props.team)

    return (
        <div>
            <p>I am user</p> 
            {userData.map(user => {
                return (
                    <div>
                        <h2>{user.memberName}</h2>
                        <h3>{user.memeberRole}</h3>
                        <p>{user.memberEmail}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default User