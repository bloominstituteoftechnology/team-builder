import React from 'react';

const Form = (props) => {
    const { formValues, updateForm, submitForm } = props


    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        updateForm(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }



    return (
        <div>
            <h3>Add Team Members Here</h3>
            <form onSubmit={onSubmit}>
                <label> Name: 
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        placeholder="Enter Your Name"
                        onChange={onChange}

                    />
                </label>

                <label> Email: 
                    <input 
                        type="email"
                        name="email"
                        value={formValues.email}
                        placeholder="Enter Your Email"
                        onChange={onChange}
                    />
                </label>

                <label> Role: 
                    <select name="role" value={formValues.role} onChange={onChange}>
                        <option value=''>**Select a Role**</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
                <button>Submit</button>
             </form>
        </div>
    )
}


export default Form;