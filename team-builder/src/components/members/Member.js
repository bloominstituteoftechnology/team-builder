import React from 'react';
import styled from 'styled-components'


const Members = props => {
    return (
        <div>
            {props.members.map(member => (
                <MemberContainer key={member.id}>
                    <h2>{member.name}</h2>
                    <p><strong>Role:</strong> {member.role}</p>
                    <p><strong>Email:</strong> <em>{member.email}</em></p>
                </MemberContainer>
            ))}
        </div>
    )
}

export default Members

const MemberContainer = styled.div`
    border: solid 2px black;


`;