import React from 'react'
import styled from 'styled-components';

const FormContainerStyled = styled.div`
    border: 1px solid #CCC;
    display: inline-block;
    padding: 20px 10px;
    max-width: 500px;
    width: 90%;

    label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    label:nth-child(5) {
        margin-bottom: 0;
    }
`;

const Form = ({ input, submit, initial }) => {

    //This function capture the data that was writted in input and set it to a slice of state
    const handleInput = (event) => {
        input(event.target.name, event.target.value)
    }

    //This function avoid default behavior of reload webpage when submited form
    const handleSubmit = (event) => {
        event.preventDefault()
        submit()
    }
 


    return (
        <FormContainerStyled>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="full name" value={initial.name} onChange={handleInput} />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" placeholder="name@server.com" value={initial.email} onChange={handleInput} />
                </label>
                <label>
                    Age:
                    <input type="number" min="1" max='111' name="age" value={initial.age} onChange={handleInput} />
                </label>
                <label>
                    Role:
                    <select name="role" value={initial.role} onChange={handleInput}>
                        <option>-- Select a Role --</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="UX/UI Designer">UX/UI Designer</option>
                        <option value="DevOps">DevOps</option>
                    </select>
                </label>
                <label>
                    Are U ready?
                    <button type="submit">Submit</button>
                </label>
            </form>
            
        </FormContainerStyled>
    )
}

export default Form
