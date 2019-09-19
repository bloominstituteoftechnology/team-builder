import React from 'react';
import styled from 'styled-components';

const Div1 = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const Div2 = styled.div`
    background-color: #afafaf;
    width: 25%;
    margin: 7px;
    border-radius: 34px;
    box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
`

const Member = props => {
    return(
        
       <Div1 className="team-body">
            {props.team3.map(teams => (

                <Div2 className='teams' key={teams.id}>

                     <h2>{teams.name}</h2>
                     <p>{teams.email}</p>
                     <p>{teams.role}</p>
                </Div2>
            ))}
        </Div1>
    )
}
export default Member;