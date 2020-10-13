import React from "react";

export default function MemberForm(props){
    const { values, update, submit } = props;

    // implement change handler for inputs and dropdown
    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    };

    // don't allow browswer to reload on submit
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        // create inputs for name and email
        // create dropdown for role
        <form className='form' onSubmit={onSubmit}>
            <div>
            <label>Name
                <input 
                 type="text"
                 name="name"
                 onChange={onChange}
                 value={values.username}
                 maxLength="30"
                />
            </label>
    
            <label>Email
                <input 
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                maxLength="50"
                />
            </label>

            <label>Role
                <select name="role" value={values.role} onChange={onChange}>
                    <option value="">---Select Role---</option>
                    <option value="front end engineer">Frontend Engineer</option>
                    <option value="back end engineer">Backend Engineer</option>
                    <option value="full stack web">Full Stack Web Enginieer</option>
                    <option value="graphic designer">Graphic Designer</option>
                </select>
            </label>

            <div>
                <button>Submit</button>
            </div>
            </div>
        </form>
    )
};