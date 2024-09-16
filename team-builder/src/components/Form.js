import React from 'react';

function Form(props){
    const {values, onInputChange, onSubmit} = props;

    return (
        <form className="component" onSubmit={onSubmit}>
            <input
                placeholder="Enter Your Name"
                value={values.name}
                onChange={onInputChange}
                name='name'
            />
            <input
                placeholder="Enter Your Email"
                value={values.email}
                onChange={onInputChange}
                name='email'
            />

            <select
            onChange={onInputChange}
            name='role'
            >
                <option>Pick A Role</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Fullstack Engineer'>Fullstack Engineer</option>
                <option value='Designer'>Designer</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default Form;