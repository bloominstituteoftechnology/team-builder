import React, {useState} from "react"

function MemberForm(props) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addNewMember(member)
        setMember({
            name: "",
            email: "",
            role: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br /><br />
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={member.name} 
                onChange={handleChange} 
            /><br /><br />
            <label htmlFor="email">Email</label><br /><br />
            <input 
                type="text" 
                id="email" 
                name="email" 
                value={member.email} 
                onChange={handleChange} 
            /><br /><br />
            <label htmlFor="role">Role</label><br /><br />
            <input 
                type="text" 
                id="role" 
                name="role" 
                value={member.role} 
                onChange={handleChange} 
            /><br /><br />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default MemberForm