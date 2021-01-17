import React from 'react'
import styled from 'styled-components'



function Member (props){
    const { details } = props

    const currentMembers =[
        {name: 'Thorin Oakenshield', email:'AzogSux@chainmail.com', role: 'Leader', status: true},
        {name: 'Balin', email: 'Lordofm0r1a@chainmail.com', role:'Advisor', status: true}
    
    ]
      

    return(
        <Div>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p><strong><em>{`${details.name}, at your service!` }</em></strong> </p>
        </Div>
    )
}



export default Member

const Div = styled.div`
    border: 2px solid black;
    text-align: left;
    width: 49%;
    margin: 20px;
    padding: 10px;
`;









