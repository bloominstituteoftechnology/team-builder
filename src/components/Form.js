import React, { useState } from "react"
import { Input, Label, Button } from "./Styles"

const Form = ({addNewName}) => {
    const [teamMembers, setTeamMembers] = useState({
        name: "",
        email: "",
        role: "",
    })

    const changeHandler = event => {
        setTeamMembers({...teamMembers,
            [event.target.name]: event.target.value
        })
    }

    const submit = event => {
        event.preventDefault()
        addNewName(teamMembers)
    };

    return (
        <Input>
            <form onSubmit={submit}>
                <Label>Name:</Label>
                <input onChange={changeHandler} type="text" name="name" value={teamMembers.name} />
                <Label>Email Address:</Label>
                <input onChange={changeHandler} type="email" name="email" value={teamMembers.email} />
                <Label>Role:</Label>
                <input onChange={changeHandler} type="text" name="role" value={teamMembers.role} />
                <Button type="submit">Submit</Button>
            </form> 
        </Input>
    )
}

export default Form;