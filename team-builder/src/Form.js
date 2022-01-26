import React from "react";


export default function Form(props) {
    const { 
        values,
        update, 
        submit,
        errors,
    } = props

    const onChange = evt => {
        
        const { name, value, checked, type } = evt.target
        const trueValue = type === 'checkbox' ? checked : value;
        update(name, trueValue);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        < form onSubmit={onSubmit}>
           <div className='errors'>
               <div>{errors.name}</div>
               <div>{errors.email}</div>
               <div>{errors.role}</div>
           </div>
           
            <label>Name 
                <input  
                 name='name'
                 type='text'
                 placeholder='name'
                 maxLength='30'
                 value={values.name}
                 onChange={onChange}
                />
            </label>
            <label>Email
                <input
                 name='email'
                 type='email'
                 placeholder='email'
                 value={values.email}
                 onChange={onChange}
                />
            </label>
            <label>Role 
                <select value={values.role} name='role' onChange={onChange}>
                 <option value=''>-- Select a Role --</option>
                 <option value='jedi'>Jedi</option>
                 <option value= 'scoundrel'>Scoundrel</option>
                 <option value='general'>General</option>
                 <option value='pilot'>Pilot</option>     
                </select>  
            </label>
            <label>Terms of Service
                <input 
                  type='checkbox'
                  name='terms'
                  checked={values.terms}
                  onChange={onChange}

                />

            </label>

            <div>
                <button type = 'submit'>Submit</button>
            </div>
            
        </form>
    )
}