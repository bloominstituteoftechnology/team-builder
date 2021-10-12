import React from 'react'

export default function Member(props){
const {details} = props
console.log(details);
if(!details){
    return <h3>Working on fetching your info </h3>
}
return (
    <div className='member-container'>
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>

    </div>
)


}