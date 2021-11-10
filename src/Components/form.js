import {React, useState} from 'react';

export default function Form(props){
  const {values, update, submit} = props;

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value; 
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

 return(
    <form onSubmit={onSubmit}>
        <div> 
        <label>Your Name
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
        <label>TeamRole
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">  ——Select——</option>
            <option value="Chief Windtalker">Chief Windtalker</option>
            <option value="Chief Arrow Sharpner">Chief Arrowsharpner</option>
            <option value="Chief Buffalo Chaser">Chief Buffalo Chaser</option>
          </select>
        </label>
    </div>
        <div>
          <button disabled={!values.name || !values.email || !values.role}>submit</button>
        </div>
     </form>
        )
}
