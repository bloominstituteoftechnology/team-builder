import React from 'react'

 const Friends = (props) => {
    
    return (
        
         <p>
            {` Name: ${props.data.name}, Role: ${props.data.role}, Track: ${props.data.track}`}
        </p>
        
    )
}

export default Friends;