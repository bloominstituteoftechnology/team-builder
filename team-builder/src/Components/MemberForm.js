import React, { useState } from "react";

const MemberForm = props => {
    const [member, setMember] = useState({name: "", role: "" })

    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addMemberFn(member);
        setMember({ name: "", role: "", email: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                value={member.name}
                name="name"
                type="text"
                onChange={handleChange}
            />
            <label htmlFor="role">Role</label>
            <input
                id="role"
                value={member.role}
                name="role"
                type="text"
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                value={member.email}
                name="email"
                type="text"
                onChange={handleChange}
            />
            <button type="submit">Add Member</button>
        </form>

    );
};

export default MemberForm; 