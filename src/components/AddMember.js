import { useState } from 'react'

function AddMember(props) {
    let {addTeamMember} = props
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    return (
        <form>
            <input
                name="name" 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                name="role" 
                type="text" 
                placeholder="Role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
            />
            <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={e => {
                e.preventDefault()
                addTeamMember(name, role, email)
            }}>Submit</button>
        </form>
    )
}

export default AddMember;