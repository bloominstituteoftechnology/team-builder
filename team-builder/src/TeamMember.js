import React from 'react'; 

// the team member card will be rendered not in the form, but outside of it in the App.js file. To get a card for each Team Member we need to map over the array that we built there, in the team variable(team slice of state).

// This is how we rendered this component in App.js, the information we need in this component is passed down with the name 'details': 
// {team.map(tm => {
//     return(
//       <TeamMember key={tm.id} details={tm} />
//     )
//   })
// }

export default function TeamMember(props) {

    const { details } = props; 

    return(
        <div clas='form_wrapper'>
            <h2>{details.username}</h2>
            <p>The {details.coderType} {details.role}</p>
            <p>Contact: {details.email} </p>
        </div>
    ); 
}; 