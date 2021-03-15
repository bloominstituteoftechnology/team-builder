import React from 'react'
import styled from 'styled-components'

const FormDiv = styled.div`

    max-width: 550px;
    max-height: 600px;
    margin: 15px;
    padding: 20px;
    border: none;
    border-radius: 12px;
    background-color: blue;
    color: white;
    font-weight: 400;
    text-align: center;
    font-family: times;

`;

const StyledLabel = styled.label`

    dislay: flex;
    flex-direction: column;
    justify-content: space-between;    
    padding: 50px;
    margin: 40px;;


`;

const StyledInput = styled.input`

    padding 20px;
    margin: 15px;

`;

const StyledButton = styled.button`

    border: none;
    border-radius: 12px;
    background-color: white;
    color: black;
    padding: 25px;
    margin: 20px;

`;

export default function MemberForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {

    const { name, value } = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <FormDiv>
        <StyledLabel>
          
          Full Name

              <StyledInput 
              onChange={onChange}
              value={values.fullname}
              name='fullname'
              type='text'
              placeholder='Full Name'
              maxLength='30' 
              />

        </StyledLabel>

        <StyledLabel>
          
          e-Mail

          <StyledInput 
              onChange={onChange}
              value={values.email}
              name='email'
              type='text'
              placeholder='e-Mail'
              maxLength='40' 
              />

        </StyledLabel>

        <StyledLabel>
          
          Location

              <StyledInput 
              onChange={onChange}
              value={values.location}
              name='location'
              type='text'
              placeholder='Location'
              maxLength='50' 
              />

        </StyledLabel>

        <StyledLabel>
          
          Position


          <select 
            onChange={onChange}
            value={values.position}
              name='position'
              >
                  <option>Web Developer</option>
                  <option>Project Manager</option>
                  <option>Sales/Marketing</option>
                  </select>

        </StyledLabel>

        <div className='submit'>
          <StyledButton>submit</StyledButton>
        </div>
      </FormDiv>
    </form>
  )
}
