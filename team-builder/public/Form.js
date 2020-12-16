import react from 'react'

export default function Form (props) {
    const { name, email, role } = props

    // const onChange = (evt) => {
    //     const null
    // }

    // const onSubmit = (evt) => {
    //     evt.preventDefault()
    //     Submit()
    // }

    return (
        <form className="form containter" onSubmit={onSubmit}>
            <div className="form inputs">
                <label>
                    Name
                    <input
                        name="Name"
                        type="text"
                        placeholder="Enter your Name"
                        maxLength="30"
                        value={props.name}
                        onChange={onChange}
                    /> 
                </label>
                <label>
                    Email
                    <input
                        name="Email"
                        type="text"
                        placeholder="Enter your email address"
                        maxLength="30"
                        value={props.email}
                        onChange={onChange}
                    /> 
                </label>
                <label>
                    Role
                <select 
                    name="role" 
                    value={props.role}
                    onChange={onChange}
                >
                    <option value="">----------Select Role----------</option>
                    <option 
                        value="backend engineer">Backend Engineer</option>
                    <option value="frontend engineer">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </select>
                </label>
                
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )

}