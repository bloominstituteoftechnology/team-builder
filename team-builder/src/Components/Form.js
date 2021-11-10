import React from 'react';



export default function Form (props){
  const { submit, change, formValues } = props;

    return(
      <div> 
        <h2> Add a team member: </h2>
        <form onSubmit={submit}>
            <input 
              type='text'
              value={formValues.name}
              name='name'
              onChange={change}
              placeholder='Team member name'
            />
             <input 
              type='email'
              value={formValues.email}
              name='email'
              onChange={change}
              placeholder='Email'
            />
            <input 
              type='text'
              value={formValues.role}
              name='role'
              onChange={change}
              placeholder='Role'
            />
            <label> Monster?
                <input
             type='checkbox'
             name='monster'
             checked={formValues.monster}
             onChange={change}
             />
             </label>
        <div>
            <button disabled={!formValues.monster}> Submit </button>
        </div>
        </form>

      </div>  
    )

}