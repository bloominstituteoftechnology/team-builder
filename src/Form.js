import React from 'react'

export default function Form(props){

    const { values, update, submit, errorText } = props
    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
        console.log(name,value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      
    }


    return(
    <form className='for container' onSubmit={onSubmit}>
        <h2 className='errorText'>{errorText}</h2>
        <div className='form-group inputs'>
            <label>Name
                <input
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
                maxLength="30"
                placeholder="Enter your name"
                />
            </label>
            <label>Email
                <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                maxLength="30"
                placeholder="Enter an email"
                />
            </label>
            <label>Role
            <select value={values.role} name="role" onChange={onChange}>
                <option value="">--- Select role ---</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
            </select>
            </label>
            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
    )
};
