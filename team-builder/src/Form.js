import React, {useState} from "react"

const Form = props => {
    const [newMember, setNewMember] = useState({})

    const handleChange = event => {
        setNewMember({...newMember,[event.target.name]:event.target.value})
    }
    console.log(props)

    const handleSubmit = event => {
        event.preventDefault();
        const addMember = props.addNewMemberProps;
        addMember(newMember);
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}/>            
            </label>
            <label>
                Email:
                <input type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}/>
            </label>
            <lable>
                Role:
                <input type="text"
                placeholder="Role"
                name="role"
                onChange={handleChange}/>
            </lable>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;