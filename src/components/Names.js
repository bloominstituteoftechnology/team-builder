import React from 'react'
import { Name, Email, Role, Card, Page } from "./Styles"

const Names = ({teamNames}) => {
    console.log(teamNames)

    return (
        <Page>
            {teamNames.map(teamMember => (
                <Card>
                    <Name>Name: {teamMember.name}</Name>
                    <Email>E-mail: {teamMember.email}</Email>
                    <Role>Role: {teamMember.role}</Role>
                </Card>
            ))}
        </Page>
    );
};



export default Names;