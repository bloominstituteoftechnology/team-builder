import React, { useState } from 'react'


const TeamForm = props => {

    const [teamMate, setTeamMate] = useState({
        name: '',
        role: '',
        email: ''
    })

    const changeHandler = (event) => {

        setTeamMate({
            ...teamMate,
            [event.target.name]: event.target.value
        })

    }

    return(

        <form
            onSubmit={event => {

                event.preventDefault();
                props.addTeamMate(teamMate)
                setTeamMate({

                    name:'',
                    role:'',
                    email:''

                })

            }}
        >

            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                type='text'
                name='name'
                placeholder='Enter Name Here'
                value={teamMate.name}
                onChange={changeHandler}
            />

            <label htmlFor='role'>Role:</label>
            <input
                id='role'
                type='text'
                name='role'
                placeholder='Enter Role Here'
                value={teamMate.role}
                onChange={changeHandler}
            />

            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type='text'
                name='email'
                placeholder='Enter Email Here'
                value={teamMate.email}
                onChange={changeHandler}
            />

            <button type='submit' >Submit</button>

        </form>

    )

}

export default TeamForm;