import React from 'react'
import { Button } from 'reactstrap';
import '../App.css';

function TeamMembers(props) {
    return (
        <div className='team-list'>
            {props.members.map(newMember => (
                <div className='newMember' key={newMember.id}>
                    <h2>{newMember.name}</h2>
                    <p>{newMember.email}</p>
                    <p>{newMember.role}</p>
                    <Button className='contactButton' href={`mailto:${newMember.email}`} color="secondary">Contact</Button> 
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;