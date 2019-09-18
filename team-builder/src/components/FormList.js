import React from "react";
import styled from "styled-components";

const Container = styled.div`
border: 4px solid teal;
width:500px;
height: 300px;
`

function FormList(props){
    return(
        <div>
            {
                props.members.map((member, index)=>(
                    <Container className="listItem" key={index}>
                        <h2>{member.memberName}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>

                    </Container>
                ))
            }

        </div>
    )
}

export default FormList;