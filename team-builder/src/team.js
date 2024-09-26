import React from 'react';

export default ({team})=>{

return (
    <div>
        {team.map(teamMember=>{
            return (
                <div key=''>
                <h2>{teamMember.email}</h2>
                <h2>{teamMember.name}</h2>
                <h2>{teamMember.number}</h2>
                </div>
            )
        })}
    </div>
)}