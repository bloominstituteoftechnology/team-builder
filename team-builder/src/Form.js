import React, { useState } from "react";
import App from "./App";
import { render } from "react-dom";

export default function MemberForm(props) {
    const { values, update, submit } = props;

    const updateForm = event => {
        const {name, values} = event.target;
        update (name, values);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }
}


return (    
<form className='form container' onSubmit={onSubmit}>
    <div className='form inputs'>
    <label>
        Username
        <input
        name='username'
        type='username'
        values={value.username}
        onChange={updateForm}
        placeholder="Username"
        maxLength='24'/>
        </input>
      </label>
      
      <label>
        Email
        <input
        name='email'
        type='email'
        values={value.email}
        onChange={updateForm}
        placeholder="Email..."
        maxLength='24'/>
        </input>
      </label>
      <label>
        Role
        <select
        name='role'
        values={value.role}
        onChange={updateForm}></select>
        
      <select name='role' value={value.role} onChange={change}>
        <option value=''>----select role----</option>
        <option value='QB'>QB</option>
        <option value='RB'>RB</option>
        <option value='WR'>WR</option>
        <option value='DB'>DB</option>
      </select>
      <div>
        <button>Submit</button>
      </div>
    </div>
    </form>
)

      