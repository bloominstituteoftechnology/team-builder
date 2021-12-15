import React from 'react';

export default function form(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const { name, value } = event.target;
        update(name, value);
    }
    const onSubmit = event => {
        event.preventDefault();
        submit();
    }


return (
    <form className='form-container' onSubmit={onSubmit}>
    <div className="form">
      <label>Name: 
        <input
        name='name'
        type='text'
        placeholder='Enter your Name'
        maxLength='20'
        value={values.name}
        onChange={onChange}
        />
      </label>
      <label>Email: 
        <input
        name='email'
        type='email'
        placeholder='Enter your Email'
        value={values.email}
        onChange={onChange}
        />
      </label>
      <label>Role: 
        <select value={values.role} name='role' onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Junior'>Junior Web Developer</option>
            <option value='UI'>UI Developer</option>
            <option value='Fullstack'>Full Stack Web Developer</option>
            <option value='Designer'>Web Designer</option>
            <option value='Senior'>Senior Web Developer</option>
        </select>
      </label>
      <div className='submit'>
          <button>Submit</button>
      </div>

    </div>
    </form>


)
}
