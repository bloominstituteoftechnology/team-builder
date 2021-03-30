import React from 'react'

function Form(props) {
    const {list, update, submit} = props;

    const onChange = evt => {
        console.log(evt.target)
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                <input
                    name='name'
                    type='text'
                    value={list.name}
                    placeholder='name'
                    onChange={onChange}
                    />
                </label>
                <br/>

                <label>Email
                <input
                    name='email'
                    type='email'
                    value={list.email}
                    placeholder='email'
                    onChange={onChange}
                    />
                </label>
                <br/>

                <label>role
                    <select
                        name='role'
                        value={list.role}
                        onChange={onChange}>
                            <option value=''>-- Select a Role --</option>
                            <option value='backend engineer'>backend engineer</option>
                            <option value='frontend engineer'>frontend engineer</option>
                            <option value='designer'>designer</option>
                    </select>
                </label>

            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
    )
}
export default Form;