import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props;


  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  return (
    <div>
      <form>
        <label>
          Name: 
          <input 
            name='name'
            type='text'
            placeholder='type your first name...'
            maxLength='20'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email: 
          <input 
            name='email'
            type='email'
            placeholder='type your email address...'
            maxLength='30'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role:   
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">------select role------</option>
            <option value="backend_engineer">Backend Engineer</option>
            <option value="frontend_engineer">Frontend Engineer</option>
            <option value="designer">Designer</option>
          </select>
        </label>
        <div class='submit'>
          <input type="submit" value="Submit" onClick={
            event=> {
              event.preventDefault()
              submit();
              }}/>
        </div>
      </form>
    </div>
  )
}
