import React from "react";
import styled from "styled-components";

const Container = styled.div`
border: 4px dotted teal;
background: rgb(228,215,218,.6) ;
width:45%;
height: 40%;
text-align: center;
margin: 1% auto;
border-radius: 12px;
`

const BigWrap = styled.div`
border: 3px solid rgb(55,53,117);
border-radius: 12px;
background:rgb(230,187,208);
display: flex;
flex-wrap: wrap;
justify-content:center;
width: 100%;
min-height: 40vh;
margin: 3%;

`

function FormList(props){
    return(
        <BigWrap>
            {
                props.members.map((member, index)=>(
                    <Container className="listItem" key={index}>
                        <h2>{member.memberName}</h2>
                        <p>{member.email}</p>
                        <p>{member.role}</p>

                    </Container>
                ))
            }

        </BigWrap>
    )
}

export default FormList;