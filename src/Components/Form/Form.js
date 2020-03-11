import React from 'react';

const Form = (props) => {
  console.log('event in forms', props.memberToEdit);
  return (
    <div>
      {props.memberToEdit ?
        <form onSubmit={props.handleSubmit}>
          <label>
            Name:
        <input type="text" name="name" value={props.user.name} onChange={props.handleChange} />
          </label>
          <label>
            Email:
        <input type="email" name="email" value={props.user.email} onChange={props.handleChange} />
          </label>
          <label>
            Role:
        <input type="text" name="role" value={props.user.role} onChange={props.handleChange} />
          </label>
          <button>Submit!</button>
        </form>
        : <form onSubmit={props.handleSubmit}>
          <label>
            Name:
        <input type="text" name="name" value={props.user.name} onChange={props.handleChange} />
          </label>
          <label>
            Email:
        <input type="email" name="email" value={props.user.email} onChange={props.handleChange} />
          </label>
          <label>
            Role:
        <input type="text" name="role" value={props.user.role} onChange={props.handleChange} />
          </label>
          <button>Submit!</button>
        </form>}
    </div>

  )
}

export default Form;