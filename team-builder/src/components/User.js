import React from 'react'

const User = (props) => {
    console.log(props.member, 'inside user')

    return (
        <div>
           <p>I am user</p> 
           {/* {props.member.map(user => {
               <div>
                <p>{user.memberName}</p>
               </div>
           })} */}
        </div>
    )
}

export default User