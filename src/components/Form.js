import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function Form(props) {
  const { addNewMember } = props;
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = evt => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault();
    const newMember = {
      id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (newMember.name) {
      addNewMember(newMember);
      setFormValues(initialFormValues);
    }
    else {
      alert(`Name must be filled out`);
    }
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <h2>Add New Team Member</h2>
      <div className='form-inputs'>
        <label>Name
          <input 
            name='name'
            type='text'
            value={formValues.name}
            onChange={onChange}
            placeholder='Firstname Lastname'
            required
          />
        </label>
        <label>Email
          <input 
            name='email'
            type='email'
            value={formValues.email}
            onChange={onChange}
            placeholder='firstlast@company.com'
            required
          />
        </label>
        <label>Role
          <select name='role' value={formValues.role} onChange={onChange} required>
            <option value='' selected disabled>--- Select role ---</option>
            <option value='Android Developer'>Android Developer</option>
            <option value='Back-end Engineer'>Back-end Engineer</option>
            <option value='Data Scientist'>Data Scientist</option>
            <option value='Front-end Engineer'>Front-end Engineer</option>
            <option value='Full-stack Engineer'>Full-stack Engineer</option>
            <option value='iOS Developer'>iOS Developer</option>
            <option value='UX Designer'>UX Designer</option>
          </select>
        </label>
      </div>
      <div className='submit'>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;