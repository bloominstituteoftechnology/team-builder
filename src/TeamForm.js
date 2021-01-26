import React from "react"

function TeamForm(props) {
    const { values, submit, update } = props
    
    const onChange = evt => {
        const { name, value } = evt.target
        update(name,value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
     <form className = "form conatiner" onSubmit={onSubmit} >
            <div className="form-group inputs">
                <label> Name
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                    ></input>       
                </label> 


                <label>Email
                    <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    placeholder="---Your Email Here---"
                    maxLength="30"
                    ></input>
                </label> 
            
                
                <label>Role
                    <select
                    name="role"
                    value={values.role}
                    onChange={onChange}>
                    <option value="">---Select Your Role---</option>
                    <option value="be">Backend Engineer</option>
                    <option value="fe">Frontend Engineer</option>
                    <option value="dsg">Designer</option>
                    </select>
                </label>
                

                 <div className="submit">
                    <button>submit</button>
                 </div> 
            </div>
    </form>
                   
        )
 }

 export default TeamForm






