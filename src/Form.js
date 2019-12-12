import React, { useState } from "react"

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        number: "",
        position: "",
    })

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({ name: "", number: "", position: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Team Member</label>
            <input
                id='name'
                name='name'
                type='text'
                placeholder='Name'
                onChange={changeHandler}
                value={member.name}
            />

            <label htmlFor='number'>Email</label>
            <input
                id='number'
                name='number'
                type='text'
                placeholder='numnumberber'
                onChange={changeHandler}
                value={member.number}
            />

            <label htmlFor='position'>What I do</label>
            <input
                id='position'
                name='position'
                type='text'
                placeholder='position'
                onChange={changeHandler}
                value={member.position}
            />

            <button type='submit'>Add Member</button>
        </form>
    )
}

export default Form