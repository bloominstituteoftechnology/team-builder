import React from 'react';
import {Card,CardBody,CardText} from 'reactstrap'


const People = (props) =>{
    console.log(props.people)
    return(
        <div>
            {props.people.map(person=>{
            return <Card key={Math.random()}>
                <CardBody>
                <CardText>Name: {person.name}</CardText>
                <CardText>Email: {person.email}</CardText>
                <CardText>Role: {person.role}</CardText>
                </CardBody>
            </Card>
            })}


        </div>
    )

}

export default People