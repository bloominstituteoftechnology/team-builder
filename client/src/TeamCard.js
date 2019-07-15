import React, {useState} from 'react';
import {Button,Card} from 'semantic-ui-react';

function TeamCard (props) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.email}</Card.Meta>
                <Card.Description>{props.role}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button color='yellow'>
                    Edit
                </Button>
                <Button color='red'>
                    Remove
                </Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default TeamCard;