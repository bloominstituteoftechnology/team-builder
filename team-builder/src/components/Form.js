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

const Form = ({ input }) => {

    const handleInput = (event) => {
        input(event.target.name, event.target.value)
    }

    return (
        <FormContainerStyled>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="full name" onChange={handleInput} />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" placeholder="name@server.com" onChange={handleInput} />
                </label>
                <label>
                    Age:
                    <input type="number" min="1" max='111' name="age" onChange={handleInput} />
                </label>
                <label>
                    Role:
                    <select name="role" onChange={handleInput}>
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
