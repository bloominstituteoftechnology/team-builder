import React, {useState} from 'react';
import {Button,Card} from 'semantic-ui-react';

function TeamCard (props) {
    return (
        <Card>
            {props.editNum === props.id ? (
            <>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.email}</Card.Meta>
                    <Card.Description>{props.role}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button color='yellow' onClick={() => props.toggleEdit(props.id)}>
                        Cancel
                    </Button>
                    {/* <Button color='red'>
                        Remove
                    </Button> */}
                    </div>
                </Card.Content>
            </>
            ) : (
            <>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Meta>{props.email}</Card.Meta>
                    <Card.Description>{props.role}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button color='yellow' onClick={() => props.toggleEdit(props.id)}>
                        Edit
                    </Button>
                    <Button color='red'>
                        Remove
                    </Button>
                    </div>
                </Card.Content>
            </>
            )}
        </Card>
    )
}

export default TeamCard;