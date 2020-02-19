import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './FormTeam.css';

function FormTeam(props) {
  const [team, setTeam] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handelChages = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(team);
    setTeam({ name: '', email: '', role: '' });
  };
  return (
    <div className='body'>
      <h1>Adding New member to Team</h1>
      <Form onSubmit={submitForm}>
        <FormGroup row>
          <Label for='name' sm={2}>
            Name:
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='name'
              id='name'
              value={team.name}
              onChange={handelChages}
              required='required'
              pattern='[A-Za-z]+'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='email' sm={2}>
            Email:
          </Label>
          <Col sm={10}>
            <Input
              type='email'
              name='email'
              id='email'
              value={team.email}
              onChange={handelChages}
              required='required'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='role' sm={2}>
            Role:
          </Label>
          <Col sm={10}>
            <Input
              type='select'
              name='role'
              id='role'
              required='required'
              value={team.role}
              onChange={handelChages}>
              <option></option>
              <option>Design Engineer</option>
              <option>Frontend Engineer</option>
              <option>Backend Engineer</option>
            </Input>
          </Col>
        </FormGroup>
        <Button type='submit'>Add Member</Button>
      </Form>
    </div>
  );
}

export default FormTeam;
