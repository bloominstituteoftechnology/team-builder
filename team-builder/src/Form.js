import React from 'react';

function Form({ values, update, add }) {
  const change = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const submit = (evt) => {
    evt.preventDefault();
    add();
  };

  return (
    <form onSubmit={submit}>
      <input
        type='text'
        name='name'
        value={values.name}
        onChange={change}
        placeholder='Name'
      />
      <input
        type='email'
        name='email'
        value={values.email}
        onChange={change}
        placeholder='email'
      />
      <select name='role' value={values.role} onChange={change}>
        <option value=''>select role</option>
        <option value='Backend'>Backend</option>
        <option value='Frontend'>Frontend</option>
        <option value='Designer'>Designer</option>
        <option value='BizDev'>BizDev</option>
      </select>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
