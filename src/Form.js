import React from "react";

export default function Form(props){
    const { values, update, submit, errorText } = props
    
    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    };

    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs" >
                <label>Name
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        maxLength="30"
                        placeholder="Please enter a name"                    
                    />
                </label>
                <label>Email
                    <input 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="Please enter an email"                    
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">--Select a Role--</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Full Stack">Full Stack</option>
                    </select>
                </label>
                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </form>
    )

};

