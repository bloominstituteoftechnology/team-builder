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
const label = styled.label`
  display: flex
  padding: 4em;
  background: red;
  border-color: tomato;

  `
const StyledTeam = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  color: dodgerblue;
  font-weight: bold;
  &:hover {
    color: crimson};
  }
  button {
    background: yellow;
     &:hover{
    animation: 1s ${fadeIn} ease-out;
     transform: scale(1.1);
     
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
      <div className='form-group inputs'>
      <StyledTeam>  
        <label>Member Name
          
              <input 
                type="text" name="name"
                value={values.name}
                placeholder="Member Name"
                onChange={onChange}
                
              />
        </label>

        </StyledTeam>
        <StyledTeam>
        <label>Email
         
          <input 
            type="email"
            name="email"
            value={values.email}
            placeholder="Type a email"
            onChange={onChange}
          />
        </label>
    </StyledTeam>    
    <StyledTeam>
        <label>Role
          
          <select name="role"  value={values.role} onChange={onChange}>
            <option value="">select role!</option>
            <option value="Backend engineer">Backend engineer</option>
            <option value="Front engineer">Front engineer</option>
            <option value="Data Analyst">Data Engineer</option>
            <option value="Full Stack">Full Stack</option>
          </select>
          
        </label>
    </StyledTeam>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
</form>
)
}