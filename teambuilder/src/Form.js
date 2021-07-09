import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
    width: 35%;
    display: flex;
    justify-content: center;
    padding: 5%;
    background-color: black;
    color: white;
    border: 1rem;
    border-radius: 8px;
`

const FormLabels = styled.label`
    font-size: 2rem;
    padding: 2%;
    border: 1.5%;
`

const FormInputs = styled.input`
    text-align: center;
`

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <FormLabels>Full Name:
              <FormInputs type='text' onChange={onChange} name='fullName' value={values.username} />
        </FormLabels>

        <FormLabels>Email:
          <FormInputs type='email' onChange={onChange} name='email' value={values.email} />
        </FormLabels>

        <FormLabels>Position:
          <select onChange={onChange} name='role' value={values.role} >
            <option value=''>-- Select a Role --</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Project Manager'>Project Manager</option>
            <option value='Sales Associate'>Sales Associate</option>
          </select>
        </FormLabels>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </FormContainer>
  )
}
