import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

export default function TeamMembers(props) {
    const { teamMember } = props;
    if (!teamMember) {
        return ('retrieving...')
    }

    return (
        <Card body inverse color="success" style={{margin:"24px 5%"}}>
            <CardBody>
                <CardTitle>{teamMember.fullname}</CardTitle>
                <CardText>{teamMember.email}</CardText>
                <CardText>{teamMember.role}</CardText>
            </CardBody>
        </Card>
    )
}