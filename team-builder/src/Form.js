import React from "react";

export default function Form(props) {
   
    const { values, update, submit} = props

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    
    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>Name 
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>E-Mail
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value="">Select</option>
                        <option value="backend-engineer">Backend Engineer</option>
                        <option value="frontend-engineer">Frontend Engineer</option>
                        <option value="designer">Designer</option>
                        <option value="project-manager">Project Manager</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}
