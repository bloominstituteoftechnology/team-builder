import React, { useState } from 'react';

function Form (props) {
    const [input, setInput] = useState({name: '', email: '', role: ''})

    function handleChange(event) {
      setInput({ ...input, [event.target.name]: event.target.value });
      // console.log(event.target.value)

    }

    function submitForm(event) {
      event.preventDefault();
            const newMember = {
                  ...input,
              };
      props.addMember(newMember);
      setInput({Name: "", Email: "", Role: "" })

    }

    return (
        <form onSubmit={submitForm}>
            <fieldset>
                <legend>New Team Member</legend>
                <label htmlFor='name'>
                Name:
                    <input
                        type='text'
                        name='name'
                        placeholder="name"
                        value={input.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='email'>
                Email:
                    <input
                        type='text'
                        name='email'
                        placeholder="email"
                        value={input.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor='role'>
                Role:
                    <input
                        type='text'
                        name='role'
                        placeholder="role"
                        value={input.role}
                        onChange={handleChange}
                    />
                </label>

            </fieldset>
            <button type='submit'>Submit</button>

        </form>

    );
}

export default Form;
