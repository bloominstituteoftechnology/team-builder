import React, { useState } from 'react'


const Form = props => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        roles: ''
    });

    const handlerUpdate = event => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
        console.log(event.target.name);
        console.log(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        props.addNewEmployee(user);
        setUser({ name: '', email: ''})
        console.log('form submitted')
    };


    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexFlow: "column", backgroundColor: "white"}}>

    <div className="employee-name" style={{marginTop: "5%"}}>
    <label htmlFor= 'nameInput'style={{padding: "1%"}}>Name: </label>
        <input
            onChange={handlerUpdate}
            placeholder= 'Name'
            id= 'nameInput'
            name= 'name'
            type= 'text'
            value={user.name}
         />
            </div>

            <div className="employee-email" style={{marginTop: "2%"}}>
            <label htmlFor='emailInput' style={{padding: "1%"}}>Email: </label>
         <input 
            onChange={handlerUpdate}
            placeholder= 'Email'
            id= 'emailInput'
            name= 'email'
            type= 'text'
            value={user.email}
         />
            </div>

    <div className="employee-roles" style={{marginRight: "1%", marginTop: "2%" }}> 
         <label htmlFor='roleSelections'style={{padding:"1%"}}>Roles:</label>
          <select
              onChange={handlerUpdate}
              id='roleSelections'
               name='roles'
            value={user.roles}>



        <option value="Software Developer">Software Developer
        </option>


        <option value="Ux Designer">UX Designer
         </option>

        <option value="Frontend Developer">Frontend Developer
        </option>

        </select>
    </div>


    <button type="submit" onSubmit={handleSubmit} style={{backgroundColor: "#e63946", color: "white", width: "125px", padding: "1%", marginLeft: "40%", marginTop: "5%"}}>Add Employee</button>
</form>
    )
}

export default Form