export default function Form (props){
    const {values,update,submit} = props
console.log("HERE",values)
    const onChange = evt =>{
        const {name, value} = evt.target;
        update(name,value);
    }
    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }



    return(
        <div className="container">
            <form onSubmit = {onSubmit}>
                <label htmlFor ="fName">First Name:
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.fName}
                        name = "fName"
                    />
                </label>
                
                <label htmlFor ="lName">Last Name: 
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.lName}
                        name = "lName"
                    />
                </label>
                 
                <label htmlFor ="email">Email: 
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.email}
                        name = "email"
                    />
                </label>
                
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
                <div className ="submit">
                <button>Submit</button>
                </div>
            </form>
        </div>
       
    )
}