import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

export default function TeamMembersForm(props) {
    const {
        values,
        onInputChange,
        onSubmit,
    } = props
    return (
        <Container>
        <Form onSubmit={onSubmit}>
            <div className="row">
            <FormGroup className="col-6 col-sm-4">
                <Label for="fullname">Full Name:</Label>
                <Input id='fullname' type='text' name='fullname' value={values.fullname} onChange={onInputChange} placeholder="Full Name" />
            </FormGroup>
            <FormGroup className="col-6 col-sm-4">
                <Label for="email">Email:</Label>
                <Input id='email' type='email' name='email' value={values.email} onChange={onInputChange} maxLength='150' placeholder="Email" />
            </FormGroup>
            <FormGroup className="col-6 col-sm-4">
                <Label for="role">Role:</Label>
                {/* I've learned value has to be on input in the select as well in order to reset after submit.
                Note: Input component is used instead of select for bootstrap styling purposes. */}
                <Input type="select" id="role" name='role' onChange={onInputChange} value={values.role}>
                    <option selected>== Pick a Role ==</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Team Lead">Team Lead</option>
                </Input>
            </FormGroup>
            </div>
            <FormGroup>
                <Button>Add Team Member</Button>
            </FormGroup>
        </Form>
        </Container>
    )
}