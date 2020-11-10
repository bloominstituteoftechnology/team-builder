import React from 'react';
import styled from 'styled-components'

const NewForm = styled.div`
    border: 1px solid black;
    width: 40%;
    border-radius: 5px;
    label{
        display: flex;
        flex-direction: row;
        width: 400px;
        justify-content: space-between;
        text-align: right;
        line-height: 26px;

    }
    input{
        height: 20px;
        width: 14.3rem;
        padding: 1%;
        margin: 1%;
        
    }
    select{
        height: 30px;
        width: 15rem;
        padding: 1%;
        margin: 1%;
    }
    button{
        font-size: 1.5rem;
        margin-top: 1%;
    }
`
export default function TeamForm(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const {name, value } = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <NewForm>
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                        placeholder="Enter Name"
                        maxLength="30"
                    ></input>
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="Enter Email"
                        maxLength="30"
                    ></input>
                </label>
                {/* Dropdown menu */}
                <label>
                    Role:
                    <select 
                        name="role"
                        value={values.role}
                        onChange={onChange}>
                            <option value="">--Select Role--</option>
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Frontend Engineer">Frontend Engineer</option>
                            <option value="Ux/Ui Designer">UX/UI Designer</option>
                            <option value="SEO Specialist">SEO Specialist</option>
                            <option value="Project Manager">Project Manager</option>
                        </select>
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>
        </NewForm>
    );
}