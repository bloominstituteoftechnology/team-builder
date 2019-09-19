import React from "react";
import styled from "styled-components";

const TeamCard = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px; 
    box-shadow: 20px 20px 10px grey;
    border-radius: 10px 50px; 
    border: 1px solid black;
    padding-bottom: 20px;
`;

const FormCard = props => {
    console.log(props);
    return (
        <>
            {props.members.map(member => (
                <TeamCard className="member" key ={member.id}>
                    <div>
                        <h2>Name: {member.name}</h2>
                        <p>Email: {member.email}</p>
                        <p>Role: {member.role}</p>
                        <button>Edit</button>
                    </div>
                </TeamCard>
            ))}
        </>
    )
}

export default FormCard;