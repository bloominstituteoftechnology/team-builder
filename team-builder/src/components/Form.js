import React, { useState, useEffect } from 'react';


const Form =  ({ addNewMember, memberToEdit }) => {



    const [form, setForm] = useState({
        name:  "",
        role: "",
        nationality: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewMember(form)
        setForm({
            name: "",
            role: "",
            nationality: ""
        })
    }

    useEffect(() => {
        if (memberToEdit) {
            setForm(memberToEdit)
        }
    }, [memberToEdit])

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    name:
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={e => handleChange(e)}
                    />
                </label>
                <label>
                    role:
                    <input
                        type="text"
                        name="role"
                        value={form.role}
                        onChange={e => handleChange(e)}
                    />
                </label>
                <label>
                    nationality:
                    <input
                        type="text"
                        name="nationality"
                        value={form.nationality}
                        onChange={e => handleChange(e)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;
