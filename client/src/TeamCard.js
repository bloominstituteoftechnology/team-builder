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
                        label='UX Designer'
                        value='UX Designer'
                        checked={thisMember.role === 'UX Designer'}
                        onChange={radioHandler}
                        />
                        <Form.Field
                            control={Radio}
                            label='Front End Developer'
                            value='Front End Developer'
                            checked={thisMember.role === 'Front End Developer'}
                            onChange={radioHandler}
                        />
                        <Form.Field
                            control={Radio}
                            label='Back End Developer'
                            value='Back End Developer'
                            checked={thisMember.role === 'Back End Developer'}
                            onChange={radioHandler}
                        />
                    </Form>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='yellow' onClick={() => props.toggleEdit(props.id)}>
                        Cancel
                    </Button>
                    <Button color='green' onClick={(e) => props.editMember(e, thisMember)}>
                        Submit
                    </Button>
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
                    <Button color='red' onClick={(e) => props.removeMember(e, props.id)}>
                        Remove
                    </Button>
                    </div>
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