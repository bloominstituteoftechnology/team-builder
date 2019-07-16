import React, {useState,useEffect} from 'react';
import {Button,Card,Form,Radio} from 'semantic-ui-react';

function TeamCard (props) {
    const [thisMember, setThisMember] = useState({email:'',name:'',role:''});

    useEffect(() => {
        setThisMember(props.memberToEdit);
    },[props.memberToEdit])
    
    return (
        <Card centered>
            {props.editNum === props.id ? (
            <>
                <Card.Content>
                    <Form>
                        <Form.Input
                        label='Name'
                        name='name'
                        value={thisMember.name}
                        onChange={(e) => editHandler(e)}
                        size='mini'
                        />
                        <Form.Input
                        label='Email'
                        name='email'
                        value={thisMember.email}
                        onChange={(e) => editHandler(e)}
                        size='mini'
                        />

                        <Form.Field
                        control={Radio}
                        onChange={radioHandler}
                        checked={thisMember.role === 'UX Designer'}
                        label='UX Designer'
                        value='UX Designer'
                        />
                        <Form.Field
                            control={Radio}
                            onChange={radioHandler}
                            checked={thisMember.role === 'Front End Developer'}
                            label='Front End Developer'
                            value='Front End Developer'
                        />
                        <Form.Field
                            control={Radio}
                            onChange={radioHandler}
                            checked={thisMember.role === 'Back End Developer'}
                            label='Back End Developer'
                            value='Back End Developer'
                        />
                    </Form>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group compact widths={2}>
                        <Button basic color='yellow' onClick={() => props.toggleEdit(props.id)}>
                            Cancel
                        </Button>
                        <Button color='green' onClick={(e) => props.editMember(e, thisMember)}>
                            Submit
                        </Button>
                    </Button.Group> 
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
                    <Button.Group compact widths={2}>
                        <Button color='yellow' onClick={() => props.toggleEdit(props.id)}>
                            Edit
                        </Button>
                        <Button color='red' onClick={(e) => props.removeMember(e, props.id)}>
                            Remove
                        </Button>
                    </Button.Group>
                </Card.Content>
            </>
            )}
        </Card>
    );

    function editHandler(e) {
        setThisMember({...thisMember, [e.target.name]:e.target.value});
    }

    function radioHandler(e, {value}) {
        setThisMember({...thisMember, role:value});
      }
}

export default TeamCard;