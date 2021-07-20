import React from "react";

export default function Form(props){
    const { values, update, submit } = props

    const onChange = evt => {
      const { name, value } = evt.target;
      update(name, value);
    }

    const onSubmit = evt => {
      evt.preventDefault()
      onSubmit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                <label htmlFor="email">Email
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label htmlFor="role">Role
                    <select id="role" name="role" onChange={onChange} value={values.role}>
                        <option value="">-- Select a Role --</option>
                        <option value="backend engineer">Backend Engineer</option>
                        <option value="frontend engineer">Frontend Engineer</option>
                        <option value="designer">Designer</option>
                        <option value="nocho maker">Nocho Maker</option>
                        <option value="me">Me</option>
                    </select>
                </label>
            </div>
        </form>
    
    )
}