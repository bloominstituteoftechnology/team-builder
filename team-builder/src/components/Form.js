import React, {useState} from 'react'


function Form(props) {

    const { values, update, submit } = props

    


    const handleChange = e => {
        const {name, value} = e.target
        update(name, value)
    }

    const handelSubmit = e => {
        e.preventDefault();
        submit();
    }


    return (
        <form onSubmit={handelSubmit} >
            <label>
                Name: 
                <input type='text' onChange={handleChange} name='memberName' value={values.memberName}/>
            </label>

            <label>
                Email:
                <input type='email' onChange={handleChange} name='memberEmail' value={values.memberEmail}/>
            </label>

            <label>
                role:
                <select name="memeberRole" onChange={handleChange} value={values.memeberRole}>
                    
                    <option value="front-end">Front-End</option>
                    <option value='backend'>Back-End</option>
                    <option value="fullstack">Full-stack</option>
                </select>
            </label>

            <button>Submit</button>
      </form>

    )
}

export default Form
