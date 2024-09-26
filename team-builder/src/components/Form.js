import React, { useState } from 'react';
import './Form.css';


export default function Form(props)  {

    const [member, setMember] = useState({name: "", email: "", role: ""});

    const onChange = evt => {
        setMember({...member, [evt.target.name]: evt.target.value });
    }

    const onSubmission = evt => {
        evt.preventDefault();
        props.addMemberFn(member);
        setMember({name: "", email: "", role: ""})
    }

    return (
        <div className="formCard">
            <form onSubmit={onSubmission}>
                <div>
                    <label htmlFor="name">Name   
                    <input
                        id="name"
                        value ={member.name}
                        name="name"
                        type="text"
                        onChange={onChange}
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">Email   </label>
                    <input
                        id="email"
                        value={member.email}
                        name="email"
                        type="text"
                        onChange={onChange}
                        />
                </div>
                <div>
                    <label htmlFor="role">Role   </label>
                    <input
                        id="role"
                        value={member.role}
                        name="role"
                        type="text"
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button type="submit">Add Member</button>
                </div>
            </form>
        </div>
    );
}