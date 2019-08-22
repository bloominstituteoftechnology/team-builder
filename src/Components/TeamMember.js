import React, { useState } from 'react';

function TeamMember(props) {


    return (
        <div>
            <h2>Name: {props.member.name}</h2>
            <h2>Email: {props.member.email}</h2>
            <h2>Role: {props.member.role}</h2>
        </div>
    );
}

export default TeamMember







;
