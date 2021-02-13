import React from 'react'
import styled from 'styled-components'

  const selectTitle = styled.div`
    border: 3px solid red;
  `

  const tryThis = styled.div`
    border: 1px solid #FFFFFF;
    padding: 24px;
    height: 100px;
    width: 100px;
  `


function Form(props) {
  const { values, onChange, onSubmit } = props;
  

  return (
    <div>

      <form onSubmit={onSubmit}>
          <div>
           <label> First Name 
            <input 
             type="text"
             name="name"
             placeholder='enter your first name'
             onChange={onChange}
             value={values.name}
           />
           </label>

            <label>Last name
                <input
                type='text'
                name='name'
                 placeholder='enter your last name'
                onChange={onChange}
                value={values.name}

                />
            </label>

           <label> Email 
              <input 
              type="email"
              name="email"
              placeholder='type your email'
              onChange={onChange}
              value={values.email}
            />
           </label>  

           <tryThis>
              <label>Title
                <select name="Title" onChange={onChange} value={values.title}>
                  <option value="">---Select One---</option>
                  <option value="Data_Science">Data_Science</option>
                  <option value="Project_Manager">Project_Manager</option>
                  <option value="Ux_Designer">Ux_Designer</option>
                </select>
              </label>
            </tryThis>

        <div>
            <button> Submit </button>
        </div>
        
         
          </div>
        
      </form>
    </div>
  )
}

export default Form;