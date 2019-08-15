import React from 'react';
// import teamMember from '../data';

const Form = props => {
    return (
        <div>
            {props.teamList.map(team => {
                return (
                    <div className='note' key={team.id}>
                        <h2>{team.name}</h2>
                        <h2>{team.email}</h2>
                        <h2>{team.role}</h2>
                    </div>
                );
            })}
            
        </div>
    )

}

export default Form;