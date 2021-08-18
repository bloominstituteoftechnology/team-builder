import React from 'react'

function Form (props) {

const { values, update, submit } = props;

const onChange = evt => {
    const name = evt.target.name;
  
    const value = evt.target.value;
   
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
            type="text"
            name="name"
            value={values.username}
            placeholder="Type in a username"
            maxLength="30"
            onChange={onChange}
          />
        </label>

        <label>Email
          
          <input
            type="email"
            name="email"
            value={values.email}
            maxLength="50"
            placeholder="Type in an email"
            onChange={onChange}
          />
        </label>

        
        <label>Role
          
          <select value={values.role} name="role" onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Designer'>Designer</option>
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