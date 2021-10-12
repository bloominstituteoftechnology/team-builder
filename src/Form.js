import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        update(name, value );
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <Form className="container" onSubmit={onSubmit}>
            <div>
                <label>
                    Member:
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your Full Name here'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your Email here'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>

                <label>
                    <select onChange={onChange} name='role' value={values.role}>
                        <option value=''>---- Select Role ----</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='BackEnd Developer'>BackEnd Developer</option>
                        <option value='FrontEnd Developer'>FrontEnd Developer</option>
                        <option value='Game Developer'>Game Developer</option>
                        <option value='Game Designer'>Game Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </Form>
    )
}