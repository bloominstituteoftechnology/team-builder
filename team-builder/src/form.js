import {React, useState} from 'react';

export default function Form(props){
  const {values, update, submit} = props;

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value; 
    update(name, value);
  }
  

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
    evt.preventDefault();
    submit();
  }

 return(
    <form onSubmit={onSubmit}>
        <div> 
        <label>Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        </div>

    <div>
        <label>Email
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
            />
        </label>
    </div>

    <div>
        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="Director of Moon-Based Operations">Director of Moon-Based Operations</option>
            <option value="Monkey in Charge of Banana Procurement">Monkey in Charge of Banana Procurement</option>
            <option value="Head Colored-Pencil Sharpener">Head Colored-Pencil Sharpener</option>
          </select>
        </label>
    </div>
        <div>
          <button disabled={!values.name || !values.email || !values.role}>submit</button>
        </div>
     </form>
        )
}

//array of objects