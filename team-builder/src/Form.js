import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    // Step 6
    const onChange = evt => {
        const { name, value} = evt.target;
        update(name, value);
    }

    // Step 7
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

return (
    <form className='form-container' onSubmit={onSubmit}>
        <div className='form-group inputs'>

            {/* Step 3 */}
            <label>Name 
                <input
                type='text'
                name='Name'
                onChange={onChange}
                value={values.name}
                placeholder='Type Your Name Here'
                maxLength='15'
                />
            </label>

            {/* Step 4 */}
            <label>Email
                <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='Type Your Email Here'
                maxLength='30'
                />
            </label>

            {/* Step 5 */}
            <label>Role
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>---Select Role---</option>
                    <option value='backend'>Backend Engineer</option>
                    <option value='fronend'>Fronend Engineer</option>
                    <option value='designer'>Designer</option>
                    <option value='admin'>Administrative</option>
                </select>
            </label>

            <div className='submit'>
                <button>Submit</button>
            </div>
        </div>
    </form>
)
}