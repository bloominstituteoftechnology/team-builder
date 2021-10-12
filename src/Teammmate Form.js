import React from 'react';

export default function TeammmateForm(props){
    const {values, update, submit} = props;

    const onChange= evt => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit= evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className = '' onSubmit = {onSubmit}>
            <div className = ''>

                <label> Name
                    <input
                        type= 'text'
                        name= 'name'
                        value= {values.name}
                        onChange= {onChange}
                        placeholder= 'Enter your name here'
                        />
                </label>

                <label> Email
                    <input
                        type= 'text'
                        email= 'email'
                        value= {values.email}
                        onChange= {onChange}
                        placeholder= 'Enter your email here'
                        />
                </label>

                <label> Role
                    <select value= {values.role} name= 'name' onChange= {onChange}>
                        <option value= ''>-- Select your role --</option>
                        <option value= 'guard'>Guard</option>
                        <option value= 'forward'>Forward</option>
                        <option value= 'center'>Center</option>
                    </select>
                </label>
                <div className= 'submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}