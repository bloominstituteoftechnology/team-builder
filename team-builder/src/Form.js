import React from 'react'

function User(props) {
    const { value, change, submit } = props
    const Onchange = (event) => {
        const { name, value } = event.target
        change(name, value)
        // const currentFormValues = {...formValues}
        // const newObj = {}
        // newObj[name] = value
        // const final = {...currentFormValues, newObj}
        // setFormValues(final)
    }

    const Onsubmit = (event) => {
        event.preventDefault()
        submit()
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={Onsubmit}>
                    <input
                        type='text'
                        name='Name'
                        onChange={Onchange}
                        value={value.Name}
                    />
                    <label>Role

                        <select value={value.Role} name='Role' onChange={Onchange}>
                            <option value=''>-- Select a Role --</option>
                            <option value='Student'>Student</option>
                            <option value='TL'>Team Lead</option>
                            <option value='Instructor'>Instructor</option>
                            <option value='Alumni'>Alumni</option>
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </header></div>)
}
export default User