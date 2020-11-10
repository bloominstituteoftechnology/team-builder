import React from 'react';


export default function Form(props){
    const { values, update, submit } = props;

    const onChange = (evt) => {
        console.log('shucks', evt);
        const { name, value } = evt.target;
        update(name, value);
      };
      const onSubmit = (evt) =>{
          evt.preventDefault();
          submit();
      }

    return(
      <form>
        <div>
            <form>
                <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Enter name'
                        maxLength='45'
                    ></input>
                </label>
            </form>

            <form>
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='Enter Email'
                        maxLength='80'
                    ></input>
                </label>
            </form>

            <form>
                <label>
                    Role
                    <select name='role' value={values.role} onChange={onChange}>
                    <option value="">-----</option>
                    <option value='master'>Master</option>
                    <option value='student'>Student</option>
                    <option value='guide'>Guide</option>
                    <option value='elder student'>Elder Student</option>
                  </select>
                </label>
                <button>Submit</button>
            </form>
        
        
        </div>
      </form> 
    )

}