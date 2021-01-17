import React from 'react';
import styled from 'styled-components'


function Form(props){

    const { values, update, submit} = props

    const onChange = e =>{
        const name = e.target.name;
        const value = e.target.value;

        update(name, value);
    }

    const onSubmit =e =>{
        e.preventDefault();

        submit();
    }

    return(
        <StyledForm onSubmit={onSubmit}>
            <StyledInputsContainer>
                <label> Name 
                    <input
                     name='name'
                     type='text'
                     placeholder='Enter Name'
                     value={values.name}
                     onChange={onChange}
                   />
                </label>

                <label> Email
                    <input 
                     name='email'
                     type='email'
                     placeholder='Enter email'
                     value={values.email}
                     onChange={onChange}
                    />
                </label>

                <label> Role
                     <select value={values.role} name='role' onChange={onChange}>
                         <option>---Select a Role---</option>
                         <option>Leader</option>
                         <option>Fighter</option>
                         <option>Healer</option>
                         <option>Advisor</option>
                         <option>Wizard</option>
                         <option>Cook</option>
                         <option>Burglar</option>
                     </select>
                </label>

                <label> At Your Service
                    <input 
                     name='status'
                     type='checkbox'
                     value={values.status}
                     onChange={onChange}
                    />
                </label>

                <div>
                    <button>Submit</button>
                </div>
            </StyledInputsContainer>
       </StyledForm>
    )
}



const StyledForm = styled.form`
    border: 2px solid black;
    width: 50%
`;

const StyledInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;


`;

const StyledInputs = styled.input`

`;

const StyledLabels = styled.label``;

const Button = styled.button``;





export default  Form;