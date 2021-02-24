import React from "react"

export default function MemberForm(props){
    const {values, update, submit} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <div className="container">
            <h1>Form</h1>
                <form onSubmit={onSubmit}>
                    <label>
                        Name
                        <input
                            name="username" 
                            type="text"
                            placeholder="username"
                            maxLength="20"
                            value={values.username}
                            onChange={onChange}
                        /> 
                    </label>
                    <label>
                        E-Mail
                        <input
                            name="email"
                            type="text"
                            placeholder="email"
                            maxLength="30"
                            value={values.email}
                            onChange={onChange} 
                        />
                    </label>
                    <label>
                        Role
                        <select
                            name='role'
                            value={values.role}
                            onChange={onChange}
                        >
                            <option value=''>**Choose your Role**</option>
                            <option value='Front-End Engineer'>Front-End Engineer</option>
                            <option value='Back-End Engineer'>Back-End Engineer</option>
                            <option value='Full-Stack Web Developer'>UX Designer</option>
                        </select>
                    </label>
                    <button>Submit Form</button>
                </form> 
        </div>
    )


}
