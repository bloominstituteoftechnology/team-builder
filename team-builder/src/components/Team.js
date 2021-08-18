import React from 'react';
import './Team.css';

export default function Team(props)  {
    return (
        <div className="team-list">
            {props.teamList.map(member => {
                return (
                    <div className="member" key={member.id}>
                        <h2>{member.name}</h2>
                        <p className="email">{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    );
};