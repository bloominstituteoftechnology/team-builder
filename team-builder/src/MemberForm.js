import React from "react";

export default function MemberForm(props){
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
            <label>Name
                <input 
                 type="text"
                 name="name"
                 onChange={onChange}
                 value={values.username}
                 placeholder="Enter your name"
                 maxLength="30"
                />
            </label>
    
            <label>Email
                <input 
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Enter your email"
                maxLength="50"
                />
            </label>
    
            <label>Role
                <select name="role" value={values.role} onChange={onChange}>
                    <option value="">---Select Role---</option>
                    <option value="front end engineer">Front End Engineer</option>
                    <option value="back end engineer">Back End Engineer</option>
                    <option value="full stack web">Full Stack Web Enginieer</option>
                </select>
            </label>
            </div>
        </form>
    )
};