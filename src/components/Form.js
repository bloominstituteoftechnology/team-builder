import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  color: ${(props) => props.besty ? props.theme.colors.dangerColor : props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.text.bold};
  &:hover {
    color: ${props => props.theme.colors.secondaryColor};
  }
  button {
     background-color: ${props => props.theme.colors.vsCodeBlue};
     &:hover{
    animation: 1s ${fadeIn} ease-out;
     transform: scale(1.1);
     background-color: ${props => props.theme.colors.paleSky}
     }
  }
`

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
      
    const { name, value } = evt.target
      
      update(name, value)
    }
  
    const onSubmit = evt => {
      
      evt.preventDefault()
      
      submit()
    }


return (
<form className='form container' onSubmit={onSubmit}>
      <StyledFriend className='form-group inputs'>
      <div>  
        <label>Team Member Name
          
              <input 
                type="text" name="name"
                value={values.name}
                placeholder="Type a Member Name"
                onChange={onChange}
                
              />
        </label>

        </div>
        <div>
        <label>Email
         
          <input 
            type="email"
            name="email"
            value={values.email}
            placeholder="Type a email"
            onChange={onChange}
          />
        </label>
    </div>    
    <div>
        <label>Role
          
          <select name="role"  value={values.role} onChange={onChange}>
            <option value="">select role!</option>
            <option value="Backend engineer">Backend engineer</option>
            <option value="Front engineer">Front engineer</option>
            <option value="Data Analyst">Data Engineer</option>
            <option value="Full Stack">Full Stack</option>
          </select>
          
        </label>
    </div>

        <div className='submit'>
          <button>submit</button>
        </div>
      </StyledFriend>
</form>
)
}