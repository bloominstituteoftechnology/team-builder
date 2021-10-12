import React from 'react';

export default function Person(props) {
    const {details} = props

    if (!details) {
        return <h1>THIS IS WORKING!</h1>
    }
    return (
        <div className='personContainer'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Favorite Sport: {details.role}</p>
        </div>
    )
}


// import React from 'react'

// export default function Person(props) {
//   const { details } = props

//   if (!details) {
//     return <h3>Working fetching your person&apos;s details...</h3>
//   }

//   return (
//     <div className='person container'>
//       <h2>{details.username}</h2>
//       <p>Email: {details.email}</p>
//       <p>FaveSport: {details.FaveSport}</p>
//     </div>
//   )
// }